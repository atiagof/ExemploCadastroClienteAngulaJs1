using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Xml.Serialization;
using System.Runtime.Serialization;

namespace ExAngularJs.Models
{

    [DataContract]
    public partial class CampoModel
    {
        //[Key]
        //[DatabaseGenerated(System.ComponentModel.DataAnnotations.Schema.DatabaseGeneratedOption.Identity)]
        [DataMember]
        public int Id { get; set; }

        //[Required]
        [DataMember]
        public string Nome { get; set; }
    }
}