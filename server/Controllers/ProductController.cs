using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using server.DataContext;
using server.Models;
using server.Models.Product;

namespace server.Controllers
{
    [Route("products")]
    public class ProductController: Controller
    {
        private readonly DatabaseContext _db;

        public ProductController(DatabaseContext db)
        {
            _db = db;
        }
        
        [HttpGet("search")]
        public JsonResult Search(string searchString)
        {
            var products = _db.Products
                .Include(p=> p.Images)
                .Where(p => searchString == null ||
                            searchString == string.Empty || 
                            p.Name.Contains(searchString))
                .OrderBy(p => p.Rating)
                .Take(10);

            return Json(products.ToList());
        }

        [HttpPost("initialize")]
        public IActionResult InitializeProducts()
        {
            _db.Products.AddRange(new Product[] {
                new Product() {
                    Name = "Батарейки щелочные (алкалиновые) Duracell Ultra, тип AA, 1,5В, 4шт (пальчиковые)",
                    Rating = 5,
                    OldPrice = 720,
                    Price = 269,
                    Images = {
                        new ProductImage() {
                            FileName = "https://cdn1.ozone.ru/s3/multimedia-7/6015438859.jpg",
                            FilePath = "https://cdn1.ozone.ru/s3/multimedia-7/6015438859.jpg"
                        },
                        new ProductImage() {
                            FileName = "https://cdn1.ozone.ru/s3/multimedia-9/wc50/6006422301.jpg",
                            FilePath = "https://cdn1.ozone.ru/s3/multimedia-9/wc50/6006422301.jpg"
                        }
                        
                    }
                },
                new Product() {
                    Name = "Беспроводной пылесос Dyson V8 Total Clean, темно-серый",
                    Rating = 5,
                    OldPrice = 34990,
                    Price = 27990,
                    Images = {
                        new ProductImage() {
                            FileName = "https://cdn1.ozone.ru/s3/multimedia-3/6135419403.jpg",
                            FilePath = "https://cdn1.ozone.ru/s3/multimedia-3/6135419403.jpg"
                        },
                        new ProductImage() {
                            FileName = "https://cdn1.ozone.ru/s3/multimedia-7/6135419407.jpg",
                            FilePath = "https://cdn1.ozone.ru/s3/multimedia-7/6135419407.jpg"
                        }
                        
                    }
                },
                new Product() {
                    Name = "Смартфон Poco X3 6/128GB, серый",
                    Rating = 5,
                    OldPrice = 22600,
                    Price = 22600,
                    Images = {
                        new ProductImage() {
                            FileName = "https://cdn1.ozone.ru/s3/multimedia-a/6149306950.jpg",
                            FilePath = "https://cdn1.ozone.ru/s3/multimedia-a/6149306950.jpg"
                        },
                        new ProductImage() {
                            FileName = "https://cdn1.ozone.ru/s3/multimedia-z/6031976963.jpg",
                            FilePath = "https://cdn1.ozone.ru/s3/multimedia-z/6031976963.jpg"
                        }
                        
                    }
                },
                new Product() {
                    Name = "Смартфон Poco X3 6/128GB, серый",
                    Rating = 4,
                    OldPrice = 1614,
                    Price = 1097,
                    Images = {
                        new ProductImage() {
                            FileName = "https://cdn1.ozone.ru/s3/multimedia-o/wc1200/6019206564.jpg",
                            FilePath = "https://cdn1.ozone.ru/s3/multimedia-o/wc1200/6019206564.jpg"
                        }
                    }
                },
            });
            _db.SaveChanges();
            
            return Ok();
        }
    }
}