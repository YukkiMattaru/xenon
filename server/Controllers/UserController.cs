using System.Collections.Generic;
using System.Diagnostics;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using server.DataContext;
using server.Models;
using server.ViewModels;
using System.Linq;
using Microsoft.AspNetCore.Authorization;

namespace server.Controllers
{
    [Route("user")]
    public class UserController: Controller
    {
        private readonly DatabaseContext _db;

        public UserController(DatabaseContext db)
        {
            _db = db;
        }
        
        [HttpPost("login")]
        public async Task<IActionResult> Login(LoginModel model)
        {
            if (ModelState.IsValid)
            {
                User user = await _db.Users.FirstOrDefaultAsync(u => 
                    u.Email == model.Email && u.Password == model.Password);

                if (user != null)
                {
                    await Authenticate(model.Email);

                    return Ok();
                }
                
                return BadRequest("User not exist");
            }

            return BadRequest(ModelState.Values.SelectMany(v => v.Errors));
        }

        [HttpPost("logout")]
        public async Task<IActionResult> Logout()
        {
            await HttpContext.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);
            return Ok();
        }
        
        [HttpPost("register")]
        public async Task<IActionResult> Register(RegisterModel model)
        {
            if (ModelState.IsValid)
            {
                User user = await _db.Users.FirstOrDefaultAsync(u => u.Email == model.Email);
                if (user == null)
                {
                    _db.Users.Add(new User { Email = model.Email, Password = model.Password });
                    await _db.SaveChangesAsync();
                    await Authenticate(model.Email);
 
                    return Ok();
                }
                return BadRequest("User exist");
            }

            return BadRequest(ModelState.Values.SelectMany(v => v.Errors));
        }

        [Authorize]
        [HttpGet("info")]
        public IActionResult Info()
        {
            if (User != null)
            {
                return Content(User.Identity?.Name);
            }

            return Unauthorized();
        }
        private async Task Authenticate(string userName)
        {
            var claims = new List<Claim>
            {
                new Claim(ClaimsIdentity.DefaultNameClaimType, userName)
            };
            
            ClaimsIdentity id = new ClaimsIdentity(claims, 
                "ApplicationCookie",
                ClaimsIdentity.DefaultNameClaimType,
                ClaimsIdentity.DefaultRoleClaimType);
            
            await HttpContext.SignInAsync(CookieAuthenticationDefaults.AuthenticationScheme, new ClaimsPrincipal(id));
        }
    }
}