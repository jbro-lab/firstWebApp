using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace firstWebApp.Models
{
    public class GradeCalcModel
    {
        [Range(0, 1000, ErrorMessage ="Assignment points must be between 0 and 1000")]
        public int assignments { get; set; }

        [Range(0, 200, ErrorMessage = "Group Project points must be between 0 and 200")]
        public int gp { get; set; }

        [Range(0, 200, ErrorMessage = "Quiz points must be between 0 and 200")]
        public int q { get; set; }

        [Range(0, 400, ErrorMessage = "Quiz points must be between 0 and 400")]
        public int ex { get; set; }

        [Range(0, 200, ErrorMessage = "Quiz points must be between 0 and 200")]
        public int INTEX { get; set; }
    }
}
