-- SELECT
--     empresa.codigo,
--     empresa.razao_social,
--     filial.cnpj,
--     filial.inscricao_estadual,
--     cidade.nome,
--     estado.nome
-- FROM
--     empresa,
--     filial,
--     cidade,
--     estado
-- WHERE
--     filial.empresa_codigo = empresa.codigo
--     AND filial.cidade_codigo = cidade.codigo
--     AND cidade.estado_uf = estado.uf;
-- SELECT
--     produto.codigo,
--     produto.nome,
--     prateleira.numero,
--     prateleira.setor
-- FROM
--     produto,
--     prateleira
-- WHERE
--     produto.prateleira_codigo = prateleira.codigo;
-- Lista de produtos: código do produto, nome, número da prateleira, nome do setor,
-- unidade_de_medida, nome do fornecedor, valor unitario
-- SELECT
--     produto.codigo,
--     produto.nome,
--     prateleira.numero,
--     prateleira.setor,
--     unidade_medida.unidade_medida,
--     fornecedor.nome,
--     produto.valor_unitario
-- FROM
--     produto,
--     prateleira,
--     unidade_medida,
--     fornecedor
-- WHERE
--     produto.prateleira_codigo = prateleira.codigo
--     AND produto.unidade_medida_unidade_medida = unidade_medida.unidade_medida
--     AND produto.fornecedor_codigo = fornecedor.codigo
-- SELECT
--     produto.codigo AS "Código do produto",
--     produto.nome AS "Nome do produto",
--     SUM(produto.valor_unitario * produto_venda.quantidade) AS "Total R$ vendido"
-- FROM
--     produto,
--     produto_venda,
--     venda
-- WHERE
--     produto.codigo = produto_venda.produto_codigo
--     AND produto_venda.venda_codigo = venda.codigo
-- GROUP BY
--     produto.codigo,
--     produto.nome
-- ORDER BY
--     SUM(produto.valor_unitario * produto_venda.quantidade) DESC;
-- SELECT
--     funcionario.nome AS "Funcionário",
--     SUM (produto.valor_unitario * produto_venda.quantidade) AS "Total R$",
--     SUM (produto_venda.quantidade) AS "Quantidade"
-- FROM
--     venda,
--     funcionario,
--     produto_venda,
--     produto
-- WHERE
--     venda.funcionario_codigo = funcionario.codigo
--     AND produto_venda.venda_codigo = venda.codigo
--     AND produto_venda.produto_codigo = produto.codigo
-- GROUP BY
--     funcionario.nome
-- ORDER BY SUM(produto.valor_unitario * produto_venda.quantidade) DESC LIMIT 1;
SELECT
    funcionario.codigo AS "Código funcionário",
    funcionario.nome AS "Nome funcionário",
    funcionario.email AS "Email",
    filial.cnpj AS "CNPJ",
    cidade_funcionario.nome AS "Cidade funcionário",
    cidade_filial.nome AS "Cidade filial",
    cargo.nome AS "Cargo"
FROM
    funcionario
    INNER JOIN filial ON (funcionario.filial_codigo = filial.codigo)
    INNER JOIN cargo ON (funcionario.cargo_codigo = cargo.codigo)
    INNER JOIN cidade cidade_funcionario ON (funcionario.cidade_codigo = cidade_funcionario.codigo)
    INNER JOIN cidade cidade_filial ON (filial.cidade_codigo = cidade_filial.codigo)