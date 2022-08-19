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
SELECT
    produto.codigo,
    produto.nome,
    prateleira.numero,
    prateleira.setor,
    unidade_medida.unidade_medida,
    fornecedor.nome,
    produto.valor_unitario
FROM
    produto,
    prateleira,
    unidade_medida,
    fornecedor
WHERE
    produto.prateleira_codigo = prateleira.codigo
    AND produto.unidade_medida_unidade_medida = unidade_medida.unidade_medida
    AND produto.fornecedor_codigo = fornecedor.codigo