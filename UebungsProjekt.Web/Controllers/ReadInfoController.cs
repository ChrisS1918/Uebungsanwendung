using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace UebungApi.Controllers
{
    [ApiController]
    public class ReadInfoController : ControllerBase
    {
        [HttpGet("api/systeminfo")]
        ///[HttpGet("api/core/systeminfo")] wenn in Ordner "Core"
        public ActionResult<SystemInfo> Get()
        {
            var info = new SystemInfo
            {
                VersionsNummer = "1.0 Test",
                FirstApiSetupDate = "11.01.2021",
                AuthorInfo = "Christian Stark"
            };
            return Ok(info);
        }
    }

    public class SystemInfo
    {
        public string VersionsNummer { get; set; }
        public string FirstApiSetupDate { get; set; }
        public string AuthorInfo { get; set; }

    }
}

