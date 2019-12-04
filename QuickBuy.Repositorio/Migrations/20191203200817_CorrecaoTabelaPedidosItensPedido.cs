using Microsoft.EntityFrameworkCore.Migrations;

namespace QuickBuy.Repositorio.Migrations
{
    public partial class CorrecaoTabelaPedidosItensPedido : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Usuarios_Pedidos_PedidoId",
                table: "Usuarios");

            migrationBuilder.DropIndex(
                name: "IX_Usuarios_PedidoId",
                table: "Usuarios");

            migrationBuilder.DropColumn(
                name: "PedidoId",
                table: "Usuarios");

            migrationBuilder.AddColumn<int>(
                name: "PedidoId",
                table: "ItemPedidos",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_ItemPedidos_PedidoId",
                table: "ItemPedidos",
                column: "PedidoId");

            migrationBuilder.AddForeignKey(
                name: "FK_ItemPedidos_Pedidos_PedidoId",
                table: "ItemPedidos",
                column: "PedidoId",
                principalTable: "Pedidos",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ItemPedidos_Pedidos_PedidoId",
                table: "ItemPedidos");

            migrationBuilder.DropIndex(
                name: "IX_ItemPedidos_PedidoId",
                table: "ItemPedidos");

            migrationBuilder.DropColumn(
                name: "PedidoId",
                table: "ItemPedidos");

            migrationBuilder.AddColumn<int>(
                name: "PedidoId",
                table: "Usuarios",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Usuarios_PedidoId",
                table: "Usuarios",
                column: "PedidoId");

            migrationBuilder.AddForeignKey(
                name: "FK_Usuarios_Pedidos_PedidoId",
                table: "Usuarios",
                column: "PedidoId",
                principalTable: "Pedidos",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
