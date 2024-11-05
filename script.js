let alunos = [];

function adicionarAluno() {
    const nome = document.getElementById('nome').value;
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const frequencia = parseFloat(document.getElementById('frequencia').value);

    const media = (nota1 + nota2) / 2;
    const situacao = (media >= 6 && frequencia >= 75) ? 'Aprovado' : 'Reprovado';

    alunos.push({ nome, nota1, nota2, media, frequencia, situacao });
    atualizarTabela();
    atualizarEstatisticas();
}

function atualizarTabela() {
    const tbody = document.querySelector('#tabelaAlunos tbody');
    tbody.innerHTML = '';

    alunos.forEach(aluno => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${aluno.nome}</td>
            <td>${aluno.nota1}</td>
            <td>${aluno.nota2}</td>
            <td>${aluno.media.toFixed(2)}</td>
            <td>${aluno.frequencia}%</td>
            <td>${aluno.situacao}</td>
        `;
        tbody.appendChild(row);
    });
}

function atualizarEstatisticas() {
    const totalAlunos = alunos.length;
    const mediaTurma = alunos.reduce((acc, aluno) => acc + aluno.media, 0) / totalAlunos || 0;
    const frequenciaTurma = alunos.reduce((acc, aluno) => acc + aluno.frequencia, 0) / totalAlunos || 0;

    document.getElementById('mediaTurma').textContent = mediaTurma.toFixed(2);
    document.getElementById('frequenciaTurma').textContent = frequenciaTurma.toFixed(2) + '%';
    document.getElementById('totalAlunos').textContent = $ [totalAlunos]
}