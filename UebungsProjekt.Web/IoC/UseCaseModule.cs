using QualityBytes.Core.IoC;
using System;
using System.Collections.Generic;
using System.Reflection;
using System.Text;
using UebungApi.Addresses;
using UebungsProjekt.Db;

namespace UebungsProjekt.IoC
{
    class UseCaseModule : UseCaseModuleBase
    {
        protected override IEnumerable<Assembly> GetUseCaseAssemblies()
        {
            yield return typeof(Address).Assembly;
        }
    }
}
