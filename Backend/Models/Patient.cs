using System;
using System.ComponentModel.DataAnnotations.Schema;
using System.Collections.Generic;

namespace GraceSLP

{
    public class Patient
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Phone { get; set; }

        public string Email { get; set; }

        public string Address { get; set; }

        public DateTime DOB { get;set; }
  
        public List<DoctorNotes> DoctorNotes { get;set; }

        public int DoctorId { get; set; }

        public int LocationId { get; set; }

        [ForeignKey( "DoctorId" ) ]

        public Doctor Doctor { get; set; }

        [ForeignKey( "LocationId" ) ]

        public Location Location { get; set; }

        public List <Appointment> Appointments { get; set; } 

    }
}