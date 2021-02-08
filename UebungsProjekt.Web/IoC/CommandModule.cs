using QualityBytes.Core.IoC;
using System;
using System.Collections.Generic;
using System.Reflection;
using System.Text;
using UebungsProjekt.Db;

namespace UebungsProjekt.IoC
{
    class CommandModule : CommandModuleBase
    {
        protected override IEnumerable<Assembly> GetCommandAssemblies()
        {
            yield return typeof(UebungsContext).Assembly;
        }
    }
}
