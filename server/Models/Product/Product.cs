using System.Collections.Generic;

namespace server.Models.Product
{
    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public float OldPrice { get; set; }
        public float Price { get; set; }
        public float Rating { get; set; }
        public ICollection<ProductImage> Images { get; set; }

        public Product()
        {
            Images = new List<ProductImage>();
        } 
    }
}