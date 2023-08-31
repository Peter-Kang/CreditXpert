using Microsoft.AspNetCore.Mvc;
using System.Text.Json.Serialization;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace CSharpBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ShapesController : ControllerBase
    {
        // GET: api/<ShapesController>
        [HttpGet]
        public IActionResult Get()
        {
            string[] result = new string[] { "Circle", "Square", "Rectangle" };
            return Ok(result);
        }
    }
}
