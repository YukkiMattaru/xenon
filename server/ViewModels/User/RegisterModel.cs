using System.ComponentModel.DataAnnotations;

namespace server.ViewModels
{
    public class RegisterModel
    {
        [Required(ErrorMessage ="Не указан Email")]
        public string Email { get; set; }
         
        [Required(ErrorMessage = "Не указан пароль")]
        [DataType(DataType.Password)]
        public string Password { get; set; }
    }
}