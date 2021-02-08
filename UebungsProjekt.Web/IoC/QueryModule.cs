using QualityBytes.Core.IoC;
using System;
using System.Collections.Generic;
using System.Reflection;
using System.Text;
using UebungsProjekt.Db;

namespace UebungsProjekt.IoC
{
    class QueryModule : QueryModuleBase
    {
        protected override IEnumerable<Assembly> GetQueryAssemblies()
        {
            yield return typeof(UebungsContext).Assembly;
        }
    }
}
