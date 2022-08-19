SELECT empresa.codigo,
empresa.razao_social,
filial.cnpj,
filial.inscricao_estadual
FROM empresa,
filial
WHERE filial.empresa_codigo = empresa.codigo;