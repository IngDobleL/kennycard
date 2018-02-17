using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Web;

namespace KennysCards.Models
{
    public class Signup
    {
        public string Email { get; set; }
        public string User { get; set; }
        [DisplayName("Contraseña")]
        public string Password1 { get; set; }
        [DisplayName("Repite tu contraseña")]
        public string Password2 { get; set; }
    }
}