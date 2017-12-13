using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ExAngularJs.Models
{
    public class Usuario
    {
        [Key]
        [DatabaseGenerated(System.ComponentModel.DataAnnotations.Schema.DatabaseGeneratedOption.Identity)]
        public int ID { get; set; }

        [Required]
        public string Nome { get; set; }
        public string RG { get; set; }
        public string Login { get; set; }
        public string Senha { get; set; }
        public int ID_Grupo { get; set; }
        public string Salt { get; set; }
        public bool? ATIVO { get; set; }

    }
}