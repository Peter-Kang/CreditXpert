using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CSharpBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ColorSchemeController : ControllerBase
    {
        public class CollectionResponse<T>
        {
            public IEnumerable<T> Rainbow { get; set; }

            public IEnumerable<T> American { get; set; }

            public IEnumerable<T> Resistors { get; set; }
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(new CollectionResponse<string>
            {
                Rainbow = new[] { "red", "orange", "yellow", "green", "blue", "purple"},
                American = new[] { "red", "white", "blue" },
                Resistors = new[] { "brown", "red", "orange", "yellow", "green","blue","purple","grey", "white", "black"}
            });

        }

    }
}
