using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;


namespace GraceSLP

{
    public class Doctor
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string UserName { get; set; }

        public string Password { get; set; }

        public string DaysAvailable { get; set; }

        public DateTime StartTime { get;set; }

        public DateTime EndTime { get;set; }

        public int LocationId { get; set; }
        
        [ForeignKey( "LocationId" ) ]

        public Location Location { get; set; }

        public List <Patient> Patients { get; set; } 

        public List <Appointment> Appointments { get; set; } 

    }
}