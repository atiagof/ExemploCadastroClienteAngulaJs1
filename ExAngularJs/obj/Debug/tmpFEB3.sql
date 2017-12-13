CREATE TABLE [dbo].[Usuarios] (
    [Id] [int] NOT NULL IDENTITY,
    [Nome] [nvarchar](max) NOT NULL,
    [Email] [nvarchar](max),
    [Telefone] [nvarchar](max),
    CONSTRAINT [PK_dbo.Usuarios] PRIMARY KEY ([Id])
)
CREATE TABLE [dbo].[__MigrationHistory] (
    [MigrationId] [nvarchar](150) NOT NULL,
    [ContextKey] [nvarchar](300) NOT NULL,
    [Model] [varbinary](max) NOT NULL,
    [ProductVersion] [nvarchar](32) NOT NULL,
    CONSTRAINT [PK_dbo.__MigrationHistory] PRIMARY KEY ([MigrationId], [ContextKey])
)
INSERT [dbo].[__MigrationHistory]([MigrationId], [ContextKey], [Model], [ProductVersion])
VALUES (N'201611221204002_AutomaticMigration', N'ExAngularJs.Migrations.Configuration',  0x1F8B0800000000000400CD57CB6EE33614DD17E83F105CB54046CC63D306F20C522729D28E9360E4CC9E96AE1DA27CA82415D8DFD6453FA9BFD04BBD2DC54E9C098A229B88BCF7DC73DFF43F7FFD1D7F5A2B499EC03A61F4849E44C794804E4D26F46A420BBFFCF013FDF4F1FBEFE2AB4CADC9D746EE2CC8A1A67613FAE87D7ECE984B1F41711729915AE3CCD247A9518C67869D1E1FFFCC4E4E182004452C42E22F85F64241F9819F53A353C87DC1E5CC64205D7D8E3749894A6EB90297F31426F46A7DA15785E4F63717A19E87B5A7E4420A8E5412904B4AB8D6C6738F44CF1F1C24DE1ABD4A723CE072BEC901E5965C3AA81D38EFC45FEBCBF169F085758A0D545A386FD4818027677570D850FD4D21A66DF0307C571866BF095E97219CD00757702B0C25435BE7536983DC7680AB7444B5D611E9DD1DB5D5804513FE8EC8B490BEB030D15078CBE511B92F1652A4BFC3666EFE003DD185947D7A4810EFB60EF0E8DE9A1CACDF7C81654DFA26A3846DEBB1A162ABD6D3A9FCB9D1FEEC94925B34CE1712DAECF77C4FBCB1F02B68B0DC4376CFBD07AB030694F11B591FD8BA350A1A6B586ED83A94CCF8FA33E8957F9C50FC97926BB186AC39A9193C68819D864ADE16F00CC3FD56AF1417F21DCCEEB73207094BA3DFC3BFBEA19875A5392ED8D0D75C603A5A12CE43DBECA3D2C52EAFABD7D5B6B65DAA4013F0C326E83854B3236A6F9EE3DAB2EAC613ABE65333C7D88E4116CF789E63D87A83AD3E214935D5A61F92C3BB5D55182C75CF347DCBB6B58445CE5730B845D3C8F45A58E72FB9E70B1E1237CDD4486C2B073BE2DB98DA0EF3B0C1BBA837F2E1FFBAA8C7D33DDA81D305F11AFD52D8AAA58BD0B2D9C9A0D44D528E669E991A53230BA5774D9E7DDAD51CE8EB5727AF47A87BBA0F511FBD1EA3EBD83E4C773A468AD92090C38CB151CA06D3785801FBBA6728D25A6FBB68D02D715DB92FBF0D46A55C895082217A125928E3648365ACA22010257FCAA914E86F2730E35A2CB1D2AB8545713B9F0E5E17FF9F4DCF9CCBE4EBD6FD7FBE744508EA8B6BF5C08DD7DFB3FA89DBF491DB1F145FFFF86DBB7327D45BF6E3016087EDC0F198FEE6255775C784660BFC985734EB4BF7E615386ED698F59FFBF12538B1EA20C2E35F431ABAA0036D646EF4D2340147D7FA8C1A91413E66E0798611BAB05E2C79EAF13A05E7CA37CB572E8B32F90BC86EF45DE1F3C25F38076A21B7DE7831DB6FBFDCF3DB9CE3BB3C7CB9F77001690A7401EEF42F859059CBFB7A5CD9BB2042B1D48D87ACF0CD8670AB4D8B743B5A04BB80EAF05D420E3AB4ED1C542E11CCDDE9843FC15BB8E16BED33AC78BA6966EE6E909713B11DF6F852F095E5CAD5189D7EF809CBC26FD88FFF021C81F8FCF50E0000 , N'6.1.3-40302')
