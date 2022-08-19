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
SELECT
    produto.codigo,
    produto.nome,
    prateleira.numero,
    prateleira.setor
FROM
    produto AS "Código Produto",
    produto AS "Nome Produto",
    prateleira AS "Número Prateleira",
    prateleira AS "Nome Prateleira"
WHERE
    "Código Produto".prateleira_codigo = "Número Prateleira".codigo;