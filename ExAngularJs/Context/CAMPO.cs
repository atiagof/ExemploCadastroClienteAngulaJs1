namespace ExAngularJs.Context
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;
    using System.Collections;
    using System.Runtime.Serialization;

    [Table("CAMPO")]
    [DataContract]
    public partial class CAMPO
    {
        public CAMPO()
        {
        }
        [DataMember]
        public int ID { get; set; }

        [Required]
        [StringLength(100)]
        [DataMember]
        public string Nome { get; set; }

        public bool Ativo { get; set; }
    }
}
