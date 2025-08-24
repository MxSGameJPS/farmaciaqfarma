const vacinas = [
  {
    vacina: "Vacina contra dengue",
    previne:
      "Infecção causada pelos quatro sorotipos de dengue: DEN1, DEN2, DEN3 e DEN4. A eficácia na prevenção da doença é de 65,5%; na prevenção de dengue grave e hemorrágica é de 93% e de internação é de mais de 80%.",
    composicao:
      "Vacina atenuada, composta pelos quatro sorotipos vivos do vírus dengue, obtidos separadamente por tecnologia de DNA recombinante. Contém ainda aminoácidos essenciais (incluindo fenilalanina), aminoácidos não essenciais, cloridrato de arginina, sacarose, trealose di-hidratada, sorbitol, trometamol e ureia. O diluente é constituído por cloreto de sódio e água para injeções. Não contém adjuvantes e conservantes.",
    indicacao:
      "A vacina contra a dengue é indicada para crianças a partir de 9 anos, adolescentes e adultos até 45 anos, especialmente aqueles que já tiveram contato prévio com o vírus da dengue. Ela ajuda a reduzir a gravidade e a chance de hospitalização em caso de nova infecção.",
    contraindicacao: [
      "Pessoas imunodeprimidas.",
      "Alergia grave (anafilaxia) a algum dos componentes da vacina.",
      "Mulheres amamentando.",
    ],
    esquema_doses: "Três doses com intervalo de seis meses.",
    local_aplicacao: "Subcutânea.",
    cuidados: [
      "A vacinação não requer qualquer cuidado prévio.",
      "Adiar a vacinação em caso de doença febril aguda moderada a grave.",
      "A vacinação de pessoas portadoras do vírus HIV deve ser avaliada por médico, que pode prescrevê-la se não houver comprometimento do sistema imunológico.",
      "Em pacientes que receberam tratamento com doses elevadas de corticosteroides sistêmicos por duas semanas ou mais, é preciso adiar a vacinação até a função imunológica estar restaurada (no mínimo quatro semanas após a interrupção do tratamento).",
      "As mulheres em idade fértil devem evitar engravidar por quatro semanas após vacinação.",
    ],
    efeitos_adversos: {
      mais_de_10_porcento: [
        "Cefaleia",
        "mialgia",
        "dor no local da injeção",
        "mal-estar",
        "sensação de fraqueza",
        "febre",
      ],
      entre_1_e_10_porcento: [
        "Vermelhidão na pele",
        "hematoma",
        "inchaço e coceira no local da injeção",
      ],
      menos_de_1_porcento: [
        "Surgimento de gânglios (linfoadenopatia)",
        "tontura",
        "enxaqueca",
        "náuseas",
        "erupção cutânea",
        "urticária",
        "dor articular",
        "endurecimento no local da injeção",
        "sintomas gripais",
      ],
      observacoes:
        "As reações foram geralmente de gravidade leve a moderada e de curta duração (até três dias). O início foi tipicamente observado em até três dias após a vacinação, com exceção da febre, que surge dentro de 14 dias após a aplicação da vacina. As reações adversas sistêmicas tendem a ser menos frequentes após a segunda e a terceira doses. A febre foi menos frequente nos indivíduos com mais de 18 anos de idade. Hematoma e coceira no local da injeção foram menos frequente indivíduos dos 9 aos 17 anos de idade.",
    },
  },
  {
    vacina: "Vacina dTpa (Tríplice Bacteriana Acelular do Tipo Adulto)",
    previne: "Difteria, tétano e coqueluche.",
    composicao:
      "Vacina inativada. Contém os toxoides diftérico e tetânico, e componentes da cápsula da bactéria da coqueluche (Bordetella pertussis), sal de alumínio como adjuvante, fenoxietanol, cloreto de sódio e água para injeção. A quantidade de toxoide diftérico e de componentes pertussis é menor que na vacina infantil (DTPa).",
    indicacao: [
      "Para reforço das vacinas DTPa ou DTPw em crianças a partir de 3 anos de idade, adolescentes e adultos.",
      "Gestantes.",
      "Todas as pessoas que convivem com crianças menores de 2 anos, sobretudo bebês com menos de 1 ano, incluindo familiares, babás, cuidadores e profissionais da Saúde.",
    ],
    contraindicacao:
      "Pessoas que apresentaram anafilaxia ou sintomas neurológicos causados por algum componente da vacina ou após a administração de dose anterior.",
    esquema_doses: [
      "Pode ser usada para a dose de reforço prevista para os 4-5 anos de idade.",
      "Recomendada para o reforço na adolescência, em adultos e idosos.",
      "Para crianças com mais de 7 anos, adolescentes e adultos que não tomaram ou sem registro de três doses de vacina contendo o toxoide tetânico, recomenda-se uma dose de dTpa seguida de duas ou três doses da dT.",
      "Gestantes devem receber uma dose de dTpa, a cada gestação entre a 27ª e a 36ª semana. Quando não vacinadas durante a gravidez, devem receber uma dose da vacina o mais precocemente após o parto.",
    ],
    local_aplicacao: "Intramuscular.",
    cuidados: [
      "Não são necessários cuidados especiais antes da vacinação.",
      "Em caso de doença aguda com febre alta, a vacinação deve ser adiada.",
      "Em pessoas com doenças que aumentam o risco de sangramento, a aplicação intramuscular pode ser substituída pela subcutânea.",
      "Compressas frias aliviam a reação no local da aplicação. Em casos mais intensos pode ser usada medicação para dor, sob prescrição médica.",
      "Se ocorrer uma reação local muito intensa (Arthus), é importante observar o intervalo de dez anos após a aplicação da última dose da vacina para se administrar a dose de reforço.",
      "Qualquer sintoma grave e/ou inesperado após a vacinação deve ser notificado ao serviço que a realizou.",
      "Sintomas de eventos adversos persistentes, que se prolongam por mais de 72 horas, devem ser investigados.",
    ],
    efeitos_adversos: {
      em_criancas_ate_9_anos: {
        mais_de_10_porcento: [
          "Irritabilidade",
          "sonolência",
          "reações no local da aplicação (dor, vermelhidão e inchaço)",
          "fadiga",
        ],
        entre_1_e_10_porcento: [
          "Falta de apetite",
          "dor de cabeça",
          "diarreia",
          "vômito",
          "febre",
        ],
        incomuns:
          "Distúrbios da atenção, irritação nos olhos e erupção na pele (0,1% a 1%).",
      },
      em_criancas_a_partir_de_10_anos_adolescentes_e_adultos: {
        mais_de_10_porcento: [
          "Dor de cabeça",
          "reações no local da aplicação (dor, vermelhidão e inchaço)",
          "cansaço",
          "mal-estar",
        ],
        entre_1_e_10_porcento: [
          "Tontura",
          "náusea",
          "distúrbios gastrintestinais",
          "febre",
          "nódulo ou abscesso estéril no local da aplicação",
        ],
        incomuns:
          "Sintomas respiratórios, faringite, aumento dos gânglios linfáticos, síncope (desmaio), tosse, diarreia, vômito, transpiração aumentada, coceira, erupção na pele, dor articular e muscular e febre acima de 39ºC (0,1% a 1%).",
      },
      geral: [
        "Anafilaxia: menos de 0,01%.",
        "Inchaço generalizado, convulsões, urticária e fraqueza muscular: 0,01% a 0,1%.",
        "Há um pequeno aumento do risco de eventos adversos locais com a vacinação em doses repetidas e próximas em adultos com mais de 40 anos, bem como na dose de reforço das crianças (a partir de 10 anos de idade).",
      ],
    },
  },
  {
    vacina: "Vacina DPTA + VIP",
    previne: "Difteria, tétano, coqueluche e poliomielite.",
    composicao:
      "Vacina inativada. Contém os toxoides diftérico e tetânico, componentes da cápsula da bactéria da coqueluche (Bordetella pertussis), vírus da poliomielite inativados (mortos) tipos 1, 2 e 3, sal de alumínio como adjuvante, 2-fenoxietanol, polissorbato 80, cloreto de sódio e água para injeção. Pode conter traços de formaldeído, neomicina e polimixina B.",
    indicacao: [
      "Para crianças a partir de 3 ou 4 anos de idade, adolescentes e adultos, para os reforços de seus esquemas de vacinação.",
      "Pode substituir as formulações infantis da vacina tríplice bacteriana (DTPa e suas combinações) no reforço de 4 a 5 anos de idade.",
      "Para adolescentes e adultos, pode substituir a vacina dTpa e é a alternativa para viajantes com destinos às áreas de risco para poliomielite.",
      "Para gestantes, pode substituir a dTpa na indisponibilidade desta vacina ou quando se trata de gestante viajante para área de risco para a poliomielite.",
    ],
    contraindicacao:
      "Pessoas que apresentaram anafilaxia após uso de componentes da vacina ou dose anterior.",
    esquema_doses: [
      "Pode substituir qualquer dose de dTpa.",
      "Em caso de viagens a locais de risco para a poliomielite, pode ser aplicada mesmo em pessoas que estejam em dia com a dTpa.",
    ],
    local_aplicacao: "Intramuscular.",
    cuidados: [
      "Não são necessários cuidados especiais antes da vacinação.",
      "Em caso de doença aguda com febre alta, a vacinação deve ser adiada.",
      "Em pessoas com doenças que aumentam o risco de sangramento, a aplicação intramuscular pode ser substituída pela subcutânea.",
      "Compressas frias aliviam a reação no local da aplicação. Em casos mais intensos pode ser usada medicação para dor, sob prescrição médica.",
      "Se ocorrer uma reação local muito intensa (Arthus), é importante observar o intervalo de dez anos após a aplicação da última dose da vacina para se administrar a dose de reforço.",
      "Qualquer sintoma grave e/ou inesperado após a vacinação deve ser notificado ao serviço que a realizou.",
      "Sintomas de eventos adversos persistentes, que se prolongam por mais de 72 horas, devem ser investigados.",
    ],
    efeitos_adversos: {
      em_criancas: {
        mais_de_10_porcento: [
          "Sonolência",
          "reações no local da aplicação (dor, vermelhidão e inchaço)",
        ],
        entre_1_e_10_porcento: [
          "Perda de apetite",
          "irritabilidade",
          "dor de cabeça",
          "febre acima de 37,5ºC",
        ],
        "entre_0.1_e_1_porcento": [
          "Aumento dos gânglios",
          "sono inquieto",
          "apatia",
          "garganta seca",
          "diarreia",
          "vômito",
          "dor abdominal",
          "náusea",
          "cansaço",
        ],
      },
      em_adolescentes_e_adultos: {
        mais_de_10_porcento: [
          "Dor de cabeça",
          "reações no local da aplicação (dor, vermelhidão e inchaço)",
          "cansaço",
        ],
        entre_1_e_10_porcento: [
          "Distúrbios gastrintestinais",
          "febre acima de 37,5ºC",
          "hematoma no local da aplicação",
        ],
        "entre_0.1_e_1_porcento": [
          "Aumento dos gânglios",
          "diminuição do apetite",
          "sensação de formigamento",
          "sonolência",
          "tontura",
          "coceira",
          "dor muscular",
          "dor nas articulações",
          "febre acima de 39ºC",
          "calafrios",
        ],
      },
    },
  },
  {
    vacina: "Vacina Febre Amarela",
    previne: "Febre amarela.",
    transmissao:
      "Em áreas urbanas, principalmente pelo mosquito Aedes aegypti. Nas áreas silvestres, o vírus também é encontrado em macacos, e a transmissão ocorre através de mosquitos que os picam.",
    composicao:
      "Vacina atenuada. É composta de vírus vacinal amarílico vivo atenuado (enfraquecido), cultivado em ovo de galinha. Pode conter sacarose, glutamato, sorbitol, gelatina bovina, eritromicina, canamicina, cloridrato de L-histidina, L-alanina, cloreto de sódio e água para injeção.",
    indicacao:
      "Crianças a partir de 9 meses de idade, adolescentes e adultos que vivem em regiões brasileiras classificadas como áreas de recomendação de vacinação, ou em viagem nacional/internacional de risco para a doença, ou com obrigatoriedade de comprovação da vacinação.",
    contraindicacao: [
      "Crianças abaixo de 6 meses de idade.",
      "Indivíduos infectados pelo HIV, sintomáticos e com imunossupressão grave.",
      "Pessoas com imunodepressão grave por doença ou uso de medicação.",
      "Pacientes que tenham apresentado doença neurológica desmielinizante no período de seis semanas após a aplicação de dose anterior da vacina.",
      "Mulheres amamentando crianças abaixo de 6 meses de idade.",
      "Pacientes submetidos a transplante de órgãos.",
      "Pacientes com câncer.",
      "Pessoas com história de reação anafilática relacionada a substâncias presentes na vacina (ovo de galinha e seus derivados, gelatina bovina ou outras).",
      "Pacientes com história pregressa de doenças do timo.",
      "Gestantes (em princípio, mas a administração deve ser analisada em caso de surto).",
      "Indivíduos a partir de 60 anos (deve ser evitada, a menos que haja alto risco de infecção).",
    ],
    esquema_doses: {
      areas_com_recomendacao:
        "Rotina: duas doses (aos 9 meses e 4 anos). Para quem não recebeu as doses de rotina: duas doses com intervalo de dez anos.",
      viajantes:
        "Uma dose. Se dez anos depois a pessoa se deslocar para a área com recomendação, uma segunda dose deve ser aplicada. Em situações de exigência, a primeira dose deve ter sido aplicada no mínimo dez dias antes da viagem.",
    },
    local_aplicacao: "Subcutânea.",
    cuidados: [
      "Não são necessários cuidados especiais antes da vacinação.",
      "Em caso de febre recomenda-se adiar a vacinação até a melhora.",
      "A administração da vacina em pacientes com lúpus eritematoso sistêmico ou outras doenças autoimunes deve ser avaliada com cuidado.",
      "Pacientes transplantados de células de medula óssea também devem ser avaliados, respeitando-se o período mínimo de 24 meses após o transplante.",
      "Qualquer sintoma grave e/ou inesperado após a vacinação deve ser notificado ao serviço que a realizou.",
      "Todo e qualquer evento adverso grave e/ou inesperado deve ser notificado às autoridades de Saúde.",
    ],
    efeitos_adversos: {
      locais:
        "Dor no local de aplicação em 4% dos adultos e um pouco menos em crianças, dura um ou dois dias, na forma leve ou moderada.",
      gerais:
        "Febre, dor de cabeça e muscular são os eventos mais frequentes e acontecem em cerca de 4% dos que são vacinados na primeira vez e menos de 2% nas segundas doses.",
      graves_e_raros: [
        "Reações alérgicas (erupções na pele, urticária, asma, anafilaxia).",
        "Doença neurológica (encefalite, meningite, doenças autoimunes).",
        "Doença em órgãos (infecção pelo vírus vacinal causando danos semelhantes aos da doença).",
      ],
    },
  },
  {
    vacina: "Vacina Febre Tifóide",
    previne: "Febre tifoide.",
    composicao:
      "Vacina inativada. É composta por polissacarídeos da cápsula da bactéria (Salmonella typhi), fenol, cloreto de sódio, fosfato dissódico diidratado, fosfato monossódico diidratado e água para injeção.",
    indicacao: [
      "Crianças a partir de 2 anos de idade, adolescentes e adultos que viajam para áreas de alta incidência da doença, em situações específicas de longa permanência e após análise médica criteriosa.",
      "Profissionais que lidam com águas contaminadas e dejetos.",
    ],
    contraindicacao:
      "Hipersensibilidade conhecida a qualquer um dos componentes da vacina.",
    esquema_doses:
      "Uma dose. A vacina confere proteção por três anos, sendo a revacinação recomendada após este período se o risco de adoecimento persistir ou retornar.",
    local_aplicacao: "Intramuscular ou subcutânea.",
    cuidados: [
      "Em caso de febre, adiar a vacinação até a melhora.",
      "Não são necessários cuidados especiais antes da vacinação.",
      "Compressas frias aliviam a reação no local da aplicação. Em casos mais intensos, pode ser usada medicação para dor, sob recomendação médica.",
      "Qualquer sintoma grave e/ou inesperado após a vacinação deve ser notificado ao serviço que a realizou.",
      "Sintomas de eventos adversos persistentes, que se prolongam por mais de 72 horas, devem ser investigados para verificação de outras causas.",
    ],
    efeitos_adversos: {
      mais_frequentes_locais:
        "Dor (3,6% a 9,4%), vermelhidão (2,4% a 5,4%), inchaço (1,7% a 1,8%).",
      outras_reacoes_possiveis:
        "Febre (1,5% a 16,2%), dor de cabeça (10% a 7,8%), mal-estar (0,9% a 4%), náuseas (2,1% a 5%) e coceira (1,7% a 1,8%).",
    },
  },
  {
    vacina: "Vacina Contra Gripe Quadrivalente",
    previne:
      "Infecção pelo vírus Influenza (que causa a gripe) contidos nas vacinas.",
    composicao:
      "Vacina inativada. Contém proteínas de diferentes cepas do vírus Influenza (definidas anualmente). As cepas são cultivadas em ovos, e por isso as vacinas contêm traços de proteínas do ovo. Pode conter traços de formaldeído e antibióticos (geralmente gentamicina ou neomicina). Apresentação multidose contém timerosal. Também contém cloreto de sódio e água para injeção.",
    indicacao:
      "Para todas as pessoas a partir de 6 meses de vida, principalmente aquelas de maior risco para complicações.",
    contraindicacao:
      "Pessoas com alergia grave (anafilaxia) a ovo de galinha, a algum componente da vacina ou a dose anterior.",
    esquema_doses: {
      criancas_6_meses_a_9_anos:
        "Duas doses na primeira vez, com intervalo de um mês e revacinação anual.",
      criancas_maiores_9_anos_adolescentes_adultos_e_idosos:
        "Dose única anual.",
    },
    local_aplicacao: "Intramuscular.",
    cuidados: [
      "Em caso de febre, adiar a vacinação até que ocorra a melhora.",
      "Pessoas com história de alergia grave ao ovo de galinha devem receber a vacina em ambiente com condições de atendimento de reações anafiláticas e permanecer em observação por pelo menos 30 minutos.",
      "No caso de história de síndrome de Guillain-Barré (SGB) até seis semanas após a dose anterior, recomenda-se avaliação médica criteriosa.",
      "Compressas frias aliviam a reação no local da aplicação. Em casos mais intensos pode-se usar medicação para dor, sob recomendação médica.",
      "Qualquer sintoma grave e/ou inesperado após a vacinação deve ser notificado ao serviço que a realizou.",
      "Sintomas de eventos adversos persistentes, que se prolongam por mais que 72 horas, devem ser investigados.",
    ],
    efeitos_adversos: {
      locais:
        "Dor, vermelhidão e endurecimento em 15% a 20% dos vacinados. Reações leves e desaparecem em até 48 horas.",
      sistemicas:
        "Febre, mal-estar e dor muscular acometem 1% a 2% dos vacinados. Têm início de seis a 12 horas após a vacinação e persistem por um a dois dias, sendo mais comuns na primeira vez em que tomam a vacina. Reações anafiláticas são raríssimas.",
      sindrome_de_guillain_barre:
        "Pode ocorrer, mas é uma relação rara e controversa.",
    },
  },
  {
    vacina: "Vacina Haemophilus influenzae tipo b (Hib)",
    previne:
      "Doenças causadas pelo Haemophilus influenzae tipo b, principalmente meningite.",
    composicao:
      "Vacina inativada. É composta de pó liofilizado com polissacarídeo da cápsula da bactéria Haemophilus influenzae tipo b (Hib) conjugado com toxoide tetânico, lactose, cloreto de sódio, água para injeção. Apresentações multidose contêm fenol e a vacina da rede pública tem timerosal. Pode ser encontrada isolada ou combinada com a vacina tríplice bacteriana (DTPw ou DTPa).",
    indicacao: [
      "Crianças a partir de 2 meses, até 5 anos de idade.",
      "Crianças com mais de 5 anos, adolescentes e adultos com condições médicas que aumentam o risco para doenças por Hib.",
    ],
    contraindicacao:
      "Pessoas que apresentaram anafilaxia provocada por qualquer componente da vacina ou por dose anterior.",
    esquema_doses: {
      pni: "Três doses: aos 2, 4 e 6 meses de idade.",
      sbp_sbim:
        "Quarta dose entre 12 e 18 meses, em especial para crianças vacinadas com a vacina DTPa.",
      criancas_mais_5_anos_e_adultos: "Duas doses com intervalo de dois meses.",
    },
    local_aplicacao: "Subcutânea ou intramuscular.",
    cuidados: [
      "Não são necessários cuidados especiais antes da vacinação.",
      "Em caso de febre, adiar a vacinação até que ocorra a melhora.",
      "Compressas frias aliviam a reação no local da aplicação. Em casos mais intensos, pode-se usar medicação para dor, sob recomendação médica.",
      "Qualquer sintoma grave e/ou inesperado após a vacinação deve ser notificado ao serviço que a realizou.",
      "Sintomas de eventos adversos persistentes, que se prolongam por mais de 72 horas, devem ser investigados.",
    ],
    efeitos_adversos: {
      locais:
        "Dor (3% a 29%), inchaço, endurecimento e vermelhidão (0,2% a 17%).",
      gerais:
        "Febre (1% a 6%), cansaço, tontura, dor de cabeça, irritabilidade e desconforto gastrintestinal leve (1% a 20%).",
      alergias:
        "Um a cada 600 mil vacinados apresenta alergia a algum componente, sobretudo ao timerosal.",
    },
  },
  {
    vacina: "Vacina Hepatite A",
    previne: "Hepatite A.",
    composicao:
      "Vacina inativada. É composta por antígeno do vírus da hepatite A, sal de alumínio amorfo, estabilizante, cloreto de sódio a 0,9%. Pode conter traços de antibiótico (neomicina), fenoxietanol e formaldeído.",
    indicacao: "Todas as pessoas a partir de 12 meses de vida.",
    contraindicacao:
      "Pessoas que tiveram reação anafilática a algum componente da vacina ou a dose anterior.",
    esquema_doses: {
      padrao: "Duas doses com intervalo de seis meses.",
      pni: "Dose única entre 15 meses e antes de completar 2 anos de idade.",
    },
    local_aplicacao: "Intramuscular.",
    cuidados: [
      "Não são necessários cuidados especiais antes da vacinação.",
      "Em caso de doença aguda com febre alta, a vacinação deve ser adiada.",
      "Em pessoas com doenças que aumentam o risco de sangramento, a aplicação intramuscular pode ser substituída pela subcutânea.",
      "Compressas frias aliviam a reação no local da aplicação. Em casos mais intensos pode ser usada medicação para dor, sob prescrição médica.",
      "Qualquer sintoma grave e/ou inesperado após a vacinação deve ser notificado ao serviço que a realizou.",
      "Sintomas de eventos adversos persistentes, que se prolongam por mais de 72 horas, devem ser investigados.",
    ],
    efeitos_adversos: {
      mais_de_10_porcento: [
        "Irritabilidade",
        "dor de cabeça",
        "cansaço",
        "dor e vermelhidão no local da aplicação",
      ],
      entre_1_e_10_porcento: [
        "Perda de apetite",
        "sonolência",
        "diarreia",
        "náusea",
        "vômito",
        "inchaço",
        "mal-estar",
        "febre baixa",
        "endurecimento no local da aplicação",
      ],
      "entre_0.1_e_1_porcento": [
        "Sintomas respiratórios",
        "rinite",
        "vertigem",
        "erupções na pele",
        "dor muscular",
        "rigidez muscular",
      ],
      "entre_0.01_e_0.1_porcento": [
        "Diminuição da sensibilidade",
        "dormências",
        "coceira",
        "calafrios",
      ],
    },
  },
  {
    vacina: "Vacina Hepatite A e B",
    previne:
      "Infecções do fígado (hepatites) causadas pelos vírus da hepatite A e hepatite B.",
    composicao:
      "Vacina inativada. É composta do vírus inativado (morto) da hepatite A e da proteína de superfície do vírus da hepatite B. Também possui: sais de alumínio, formaldeído, sulfato de neomicina, fenoxietanol, polissorbato 20, cloreto de sódio e água para injeção.",
    indicacao:
      "Crianças a partir dos 12 meses, adolescentes e adultos. É uma boa opção para pessoas que não foram vacinadas contra as duas hepatites.",
    contraindicacao: [
      "Pessoas que apresentaram anafilaxia provocada por qualquer componente da vacina ou por dose anterior.",
      "Pessoas que desenvolveram púrpura trombocitopênica após dose anterior de vacina com antígenos do vírus da hepatite B.",
    ],
    esquema_doses: {
      criancas_e_adolescentes_1_a_15_anos:
        "Duas doses com intervalo de seis meses.",
      adolescentes_a_partir_16_anos_e_adultos:
        "Três doses, sendo a segunda um mês após a primeira e a terceira cinco meses após a segunda.",
    },
    local_aplicacao: "Intramuscular profunda.",
    cuidados: [
      "Não são necessários cuidados especiais antes da vacinação.",
      "Em caso de febre, adiar a vacinação até que ocorra a melhora.",
      "Compressas frias aliviam a reação no local da aplicação.",
      "Qualquer sintoma grave e/ou inesperado após a vacinação deve ser notificado ao serviço que a realizou.",
      "Sintomas de eventos adversos graves ou persistentes, que se prolongam por mais de 24 a 72 horas, devem ser investigados.",
    ],
    efeitos_adversos:
      "Reações no local da aplicação, como vermelhidão e inchaço por mais de 24 horas e dor intensa, foram relatados por 1,5% dos vacinados. Eventos gerais como febre, dor de cabeça, mal-estar, cansaço, náusea e vômito ocorrem com 0,3% a 10% dos vacinados. Não há relato de eventos adversos graves, mas o risco é semelhante ao das vacinas isoladas.",
  },
  {
    vacina: "Vacina Meningocócica ACWY",
    previne:
      "Meningites e infecções generalizadas (doenças meningocócicas) causadas pela bactéria meningococo dos tipos A, C, W e Y.",
    composicao:
      "Vacina inativada. Contém antígeno formado por componentes das cápsulas das bactérias (oligossacarídeos) dos sorogrupos A, C, W e Y conjugados a uma proteína que pode ser o toxoide tetânico ou o mutante atóxico da toxina diftérica (CRM-197). Pode conter também sacarose; trometamol; fosfato de potássio diidrogenado; cloreto de sódio; fosfato de sódio diidrogenado monoidratado; fosfato dissódico hidrogenado diidratado; e água para injeção.",
    indicacao: [
      "Para crianças e adolescentes, conforme recomendações da SBP e SBIm.",
      "Para adultos e idosos, dependendo da situação epidemiológica.",
      "Para pessoas de qualquer idade com doenças que aumentem o risco para a doença meningocócica.",
      "Para viajantes com destino às regiões onde há risco aumentado da doença.",
    ],
    contraindicacao:
      "Pessoas que tiveram anafilaxia após o uso de algum componente da vacina ou após dose anterior.",
    esquema_doses: {
      criancas:
        "Iniciar aos 3 meses com três doses no primeiro ano de vida e reforços aos 12 meses, 5 anos e 11 anos.",
      adolescentes:
        "Duas doses com intervalo de cinco anos, se nunca receberam a vacina.",
      adultos: "Dose única.",
    },
    local_aplicacao: "Intramuscular profunda.",
    cuidados: [
      "Não são necessários cuidados especiais antes da vacinação.",
      "Em caso de febre, adiar a vacinação até a melhora.",
      "Compressas frias aliviam a reação no local da aplicação. Em casos mais intensos pode-se usar medicação para dor, sob recomendação médica.",
      "Qualquer sintoma grave e/ou inesperado após a vacinação deve ser notificado ao serviço que a realizou.",
      "Sintomas de eventos adversos persistentes, que se prolongam por mais de 24 a 72 horas, devem ser investigados.",
    ],
    efeitos_adversos: {
      mais_de_10_porcento: [
        "Inchaço",
        "endurecimento",
        "dor e vermelhidão no local da aplicação",
        "perda de apetite",
        "irritabilidade",
        "sonolência",
        "dor de cabeça",
        "febre",
        "calafrios",
        "cansaço",
        "dor muscular",
      ],
      entre_1_e_10_porcento: [
        "Sintomas gastrintestinais (diarreia, vômito e náusea)",
        "hematoma grande no local da aplicação",
        "erupções na pele",
        "dor nas articulações",
      ],
      "entre_0.1_e_1_porcento": [
        "Insônia",
        "choro persistente",
        "sensibilidade diminuída da pele no local da aplicação",
        "vertigem",
        "coceira",
        "dor muscular",
        "dor nas mãos e pés",
        "mal-estar",
      ],
      "entre_0.01_e_0.1_porcento":
        "Inchaço extenso no membro em que foi aplicada a vacina, principalmente em adultos.",
    },
  },
  {
    vacina: "Vacina Meningocócica do grupo B",
    previne:
      "Meningites e infecções generalizadas (doenças meningocócicas) causadas pela bactéria meningococo do tipo B.",
    composicao:
      "Vacina inativada. É composta por quatro componentes, três proteínas subcapsulares e a membrana externa do meningococo B, hidróxido de alumínio, cloreto de sódio, histidina, sacarose e água para injeção. Podem existir traços de canamicina.",
    indicacao: [
      "Para crianças e adolescentes, conforme recomendações da SBP e SBIm.",
      "Para adultos com até 50 anos, dependendo de risco epidemiológico.",
      "Para viajantes com destino às regiões onde há risco aumentado da doença.",
      "Para pessoas de qualquer idade com doenças que aumentem o risco para a doença meningocócica.",
    ],
    contraindicacao:
      "Pessoas que tiveram anafilaxia após uso de algum componente da vacina ou após dose anterior.",
    esquema_doses:
      "Informação não fornecida no texto original. O texto apenas menciona que as sociedades médicas recomendam o uso, mas não especifica o esquema de doses.",
    local_aplicacao: "Intramuscular.",
    cuidados: [
      "A administração de paracetamol antes ou logo após a vacinação pode reduzir o risco de febre e não interfere na resposta imune à vacina.",
      "Não são necessários outros cuidados especiais antes da vacinação.",
      "Em caso de febre, adiar a vacinação até a melhora.",
      "Compressas frias aliviam a reação no local da aplicação.",
      "Qualquer sintoma grave e/ou inesperado após a vacinação deve ser notificado ao serviço que a realizou.",
      "Sintomas de eventos adversos persistentes, que se prolongam por mais de 24 a 72 horas, devem ser investigados.",
      "Evitar aplicação simultânea com as vacinas tríplice bacteriana, pneumocócica conjugada, Haemophilus influenzae tipo b, poliomielite e hepatite B, para reduzir chance de febre alta.",
    ],
    efeitos_adversos: {
      em_criancas_menores_2_anos: {
        mais_de_10_porcento:
          "Febre alta com duração de 24 a 28 horas. Perda de apetite, sonolência, choro persistente, irritabilidade, diarreia, vômitos, erupções na pele, sensibilidade no local da aplicação e ao movimentar o membro onde foi aplicada a vacina, reações locais (dor, calor, vermelhidão, inchaço).",
        "entre_0.01_e_0.1_porcento": "Urticária e outras reações alérgicas.",
      },
      em_mais_de_11_anos: {
        mais_de_10_porcento:
          "Cefaleia, náuseas, dor nos músculos e articulações, mal-estar e reações locais, como inchaço, endurecimento, vermelhidão e dor.",
      },
    },
  },
  {
    vacina: "Vacina Pentavalente",
    previne:
      "DTPa-VIP/Hib: difteria, tétano, coqueluche, meningite por Haemophilus influenzae tipo b e poliomielite.",
    composicao:
      "Vacinas inativadas. Contém os componentes da vacina tríplice bacteriana acelular (DTPa), componente da bactéria Haemophilus influenzae tipo b conjugado e vírus inativados (mortos) da poliomielite tipos 1, 2 e 3. A composição inclui ainda: lactose, cloreto de sódio, 2-fenoxietanol, hidróxido de alumínio e água para injeção. Pode conter traços de antibiótico (estreptomicina, neomicina e polimixina B), formaldeído e soroalbumina de origem bovina.",
    indicacao:
      "Recomendada para crianças a partir de 2 meses de idade e podem ser aplicadas até os 7 anos, sempre que seja indicada cada uma das vacinas incluídas nessas combinações.",
    contraindicacao: [
      "Maiores de 7 anos.",
      "Crianças que apresentaram encefalopatia nos sete dias seguintes à aplicação anterior de vacina contendo componente pertussis.",
      "Anafilaxia a qualquer componente da vacina.",
    ],
    esquema_doses:
      "Para a vacinação rotineira de crianças (aos 2, 4, 6 meses e entre 12 e 18 meses), preferir o uso da vacina quíntupla (penta) ou sêxtupla (hexa). Para reforço entre 4 e 5 anos de idade, recomenda-se o uso de DTPa ou dTpa-VIP.",
    local_aplicacao: "Intramuscular.",
    cuidados: [
      "Não são necessários cuidados especiais antes da vacinação.",
      "Em caso de doença aguda com febre alta a vacinação deve ser adiada.",
      "Em pessoas com doenças que aumentam o risco de sangramento, a aplicação intramuscular pode ser substituída pela subcutânea.",
      "Compressas frias aliviam a reação no local da aplicação. Em casos mais intensos pode ser usada medicação para dor, sob prescrição médica.",
      "Qualquer sintoma grave e/ou inesperado após a vacinação deve ser notificado ao serviço que a realizou.",
      "Sintomas de eventos adversos persistentes, que se prolongam por mais de 72 horas, devem ser investigados.",
    ],
    efeitos_adversos: {
      locais:
        "Até 21% das crianças vacinadas experimentam reações no local da aplicação (vermelhidão, dor, inchaço).",
      gerais:
        "Até 22% podem ter febre maior que 38ºC; e 1,9% pode ter febre a partir de 40ºC. 1% pode manifestar perda de apetite, vômito, irritabilidade, choro persistente e sonolência.",
      incomuns_ou_raros:
        "De 0,01% a 1% pode apresentar convulsão febril e episódio hipotônico-hiporresponsivo (EHH); menos de 0,01%, problemas neurológicos, inchaço transitório nas pernas com roxidão ou pequenos sangramentos transitórios, e anafilaxia. Os eventos adversos são um pouco mais frequentes nas doses de reforço.",
    },
  },
  {
    vacina: "Vacina Pneumocócica 13 - prevenar",
    previne:
      "Cerca de 90% das doenças graves (pneumonia, meningite, otite) em crianças, causadas por 13 sorotipos de pneumococos.",
    composicao:
      "Vacina inativada. É composta de 13 sorotipos de Streptococcus pneumoniae (pneumococo) conjugados com a proteína CRM197. Contém também sais de alumínio, cloreto de sódio, ácido succínico, polissorbato 80 e água para injeção.",
    indicacao: [
      "Para crianças a partir de 2 meses e menores de 6 anos de idade, é recomendada a vacinação rotineira.",
      "Para crianças com mais de 6 anos, adolescentes e adultos portadores de certas doenças crônicas, recomenda-se esquema com as vacinas VPC13 e VPP23.",
      "Para maiores de 50 anos e, sobretudo, para maiores de 60, recomenda-se esquema com as vacinas VPC13 e VPP23.",
    ],
    contraindicacao:
      "Crianças que apresentaram anafilaxia após usar algum componente da vacina ou após dose anterior.",
    esquema_doses: {
      rotina_infantil:
        "Quatro doses: aos 2, 4 e 6 meses de vida e reforço entre 12 e 15 meses.",
      criancas_1_a_2_anos_nao_vacinadas:
        "Duas doses com intervalo de dois meses.",
      criancas_2_a_5_anos_nao_vacinadas: "Uma dose.",
      criancas_acima_6_anos_e_adultos:
        "Dose única. Em algumas situações, duas doses com intervalo de dois meses podem estar indicadas.",
      maiores_50_anos: "Dose única.",
    },
    local_aplicacao: "Intramuscular.",
    cuidados: [
      "Não são necessários cuidados especiais antes da vacinação.",
      "Em caso de febre, adiar a vacinação até que ocorra a melhora.",
      "Compressas frias aliviam a reação no local da aplicação.",
      "Recomenda-se evitar o uso profilático de antitérmicos e anti-inflamatórios antes e nas 24 horas que seguem a vacinação.",
      "Qualquer sintoma grave e/ou inesperado após a vacinação deve ser notificado ao serviço que a realizou.",
      "Sintomas de eventos adversos graves ou persistentes, que se prolongam por mais de 24 a 72 horas, devem ser investigados.",
      "Os eventos adversos são mais frequentes quando as vacinas são aplicadas no mesmo dia que a vacina DTPw-HB/Hib.",
    ],
    efeitos_adversos: {
      em_criancas: {
        mais_de_10_porcento:
          "Diminuição do apetite, irritabilidade, sonolência ou sono inquieto, febre e reações no local da aplicação (dor, vermelhidão, inchaço ou endurecimento).",
        entre_1_e_10_porcento:
          "Diarreia, vômitos, erupção cutânea, febre acima de 39°C.",
        "entre_0.1_e_1_porcento":
          "Choro persistente, convulsões, urticária, reação local intensa.",
        "entre_0.01_e_0.1_porcento":
          "Episódio hipotônico-hiporresponsivo (EHH) e anafilaxia.",
      },
      em_adultos: {
        mais_de_10_porcento:
          "Diminuição do apetite, dor de cabeça, diarreia, erupção cutânea, dor nas articulações, dor muscular, calafrios, cansaço e reações locais (endurecimento, inchaço, dor, limitação do movimento do braço).",
        entre_1_e_10_porcento: "Vômitos e febre.",
        "entre_0.1_e_1_porcento":
          "Náusea, alergia grave, gânglios no braço vacinado.",
      },
    },
  },
  {
    vacina: "Vacina Pneumocócica 23",
    previne: "Doenças causadas por 23 tipos de pneumococos.",
    composicao:
      "Vacina inativada. É composta de partículas purificadas (polissacarídeos) das cápsulas de 23 tipos de Streptococos pneumoniae (pneumococo), cloreto de sódio, água para injeção e fenol.",
    indicacao: [
      "Para crianças acima de 2 anos, adolescentes e adultos que tenham algum problema de saúde que aumenta o risco para doença pneumocócica.",
      "Para pessoas a partir de 60 anos deve ser aplicada de rotina.",
      "Não é recomendada como rotina para crianças, adolescentes e adultos saudáveis.",
    ],
    contraindicacao:
      "Crianças, adolescentes e adultos que apresentaram anafilaxia causada por algum componente ou dose anterior da vacina.",
    esquema_doses:
      "Recomenda-se a combinação da VPP23 com a VPC13. Idealmente, iniciar o esquema com vacina conjugada e aplicar uma dose da VPP23 seis a doze meses depois, e outra cinco anos após a primeira dose de VPP23. Na maioria das vezes não se recomenda aplicar mais de duas doses de VPP23.",
    local_aplicacao: "Intramuscular.",
    cuidados: [
      "Não são necessários cuidados especiais antes da vacinação.",
      "Em caso de febre, adiar a vacinação até que ocorra a melhora.",
      "Compressas frias aliviam a reação no local da aplicação.",
      "Qualquer sintoma grave e/ou inesperado após a vacinação deve ser notificado ao serviço que a realizou.",
      "Sintomas de eventos adversos graves ou persistentes, que se prolongam por mais de 24 a 72 horas, devem ser investigados.",
    ],
    efeitos_adversos: {
      mais_de_10_porcento:
        "Dor no local da aplicação (60,0%), inchaço ou endurecimento (20,3%), vermelhidão (16,4%), dor de cabeça (17,6%), cansaço (13,2%) e dor muscular (11,9%).",
      menos_de_10_porcento:
        "Reações locais mais intensas, com inchaço de todo braço, hematoma e manchas vermelhas.",
    },
  },
  {
    vacina: "Vacina Rotavírus Pentavalente",
    previne: "Doença diarreica causada por rotavírus.",
    composicao:
      "Vacina oral atenuada pentavalente (VR5) é composta por cinco tipos de rotavírus vivos 'enfraquecidos', sacarose, citrato de sódio, fosfato de sódio monobásico monoidratado, hidróxido de sódio, polissorbato 80, meios de cultura e traços de soro fetal bovino.",
    indicacao:
      "Bebês de 6 semanas a 8 meses e 0 dia. A primeira dose deve ser obrigatoriamente aplicada até a idade de 3 meses e 15 dias, e a última dose até os 7 meses e 29 dias.",
    contraindicacao: [
      "Crianças fora da faixa etária citada.",
      "Crianças com deficiências imunológicas por doença ou uso de medicamentos.",
      "Alergia grave (urticária disseminada, dificuldade respiratória e choque anafilático) provocada por algum dos componentes da vacina ou por dose anterior.",
      "Doença do aparelho gastrintestinal ou história prévia de invaginação intestinal.",
    ],
    esquema_doses:
      "Três doses, com intervalo mínimo de quatro semanas. Esquema padrão: 2, 4 e 6 meses de idade. A idade máxima para começar a vacinação é 3 meses e 15 dias, e para a última dose é 7 meses e 29 dias.",
    local_aplicacao: "Oral.",
    cuidados: [
      "Adiar a vacinação em bebês com febre moderada a alta (acima de 38⁰C) ou diarreia intensa.",
      "Bebês de mães portadoras do vírus HIV podem ser vacinados se não tiverem sinais de deficiência imunológica.",
      "Não é preciso dar outra dose se o bebê golfar ou regurgitar após tomar a vacina.",
      "Sintomas de eventos adversos graves ou persistentes, que se prolongam por mais de 24 a 72 horas, devem ser investigados.",
      "Eventos adversos inesperados ou graves devem ser notificados.",
    ],
    efeitos_adversos: {
      gerais:
        "Sintomas de gastrenterite ocorrem em menos de 10% dos vacinados. O risco de invaginação intestinal é pequeno, muito menor que o risco de hospitalização ou óbito por gastrenterite por rotavírus.",
    },
  },
  {
    vacina: "Vacina Tetra Viral",
    previne: "Sarampo, caxumba, rubéola e varicela.",
    composicao:
      "Vacina atenuada, contendo vírus vivos “enfraquecidos” do sarampo, da rubéola, da caxumba e da varicela (catapora), lactose anidra, sorbitol, manitol, aminoácidos, traços de neomicina e água para injeção. Contém traços de proteína do ovo de galinha.",
    indicacao: [
      "Recomendada para crianças e adolescentes com menos de 12 anos em substituição às vacinas tríplice viral (SCR) e varicela, quando a aplicação destas duas for coincidente.",
      "O PNI adotou a vacina SCR-V para a aplicação da segunda dose da vacina SCR e dose única da vacina varicela.",
    ],
    contraindicacao: [
      "Gestantes.",
      "Pessoas com comprometimento da imunidade por doença ou medicação.",
      "História de anafilaxia após dose anterior da vacina ou a algum componente.",
      "Pessoas com alergia grave a ovo devem ser vacinadas em ambiente hospitalar, por precaução.",
    ],
    esquema_doses:
      "O sistema público disponibiliza uma dose aos 15 meses de idade. A SBP e SBIm recomendam duas doses: aos 12 meses e entre 15 e 24 meses.",
    local_aplicacao: "Subcutânea.",
    cuidados: [
      "Crianças que usaram medicamentos imunossupressores podem ser vacinadas pelo menos um mês após a suspensão do uso do medicamento.",
      "Crianças em uso de quimioterapia só podem ser vacinadas três meses após a suspensão do tratamento.",
      "Crianças que receberam transplante de medula óssea só podem ser vacinadas de 12 a 24 meses após o procedimento.",
      "Em caso de febre, adiar a vacinação até que ocorra a melhora.",
      "Compressas frias aliviam a reação no local da aplicação.",
      "Qualquer sintoma grave e/ou inesperado após a vacinação deve ser notificado ao serviço que a realizou.",
      "Sintomas de eventos adversos graves ou persistentes, que se prolongam por mais de 24 a 72 horas, devem ser investigados.",
    ],
    efeitos_adversos: {
      mais_de_10_porcento: "Febre após a primeira dose (22%).",
      entre_1_e_10_porcento: [
        "Erupções na pele (3%)",
        "febre alta (5% a 15%)",
        "dor de cabeça",
        "irritabilidade",
        "febre baixa",
        "lacrimejamento",
        "vermelhidão dos olhos",
        "coriza (0,5% a 4%)",
        "manchas vermelhas no corpo (5%)",
      ],
      menos_de_1_porcento: [
        "Reações locais (ardência, vermelhidão, dor e formação de nódulo) em menos de 0,1%.",
        "Gânglios inchados em menos de 1%.",
        "Inflamação das glândulas parótidas (0,7% a 2%).",
      ],
      raros: [
        "Convulsão febril (discretamente mais alto após a primeira dose).",
        "Inflamação das meninges (meningite).",
        "Inflamação do cérebro (encefalite).",
        "Manifestações hemorrágicas (púrpura trombocitopênica).",
        "Dor articular ou artrite em mulheres após a puberdade (25%).",
        "Anafilaxia (muito rara).",
      ],
    },
  },
  {
    vacina: "Vacina Tríplice Viral",
    previne: "Sarampo, caxumba e rubéola.",
    composicao:
      "Vacina atenuada, contendo vírus vivos “enfraquecidos” do sarampo, da rubéola e da caxumba; aminoácidos; albumina humana; sulfato de neomicina; sorbitol e gelatina. Contém traços de proteína do ovo de galinha e uma das vacinas da rede pública contém traços de lactoalbumina (proteína do leite de vaca).",
    indicacao: "Crianças, adolescentes e adultos.",
    contraindicacao: [
      "Gestantes.",
      "Pessoas com comprometimento da imunidade por doença ou medicação.",
      "História de anafilaxia após aplicação de dose anterior da vacina ou a algum componente.",
      "Pessoas com alergia grave a ovo devem ser vacinadas em ambiente hospitalar, por precaução.",
    ],
    esquema_doses:
      "Todo indivíduo deve ter tomado duas doses na vida, com intervalo mínimo de um mês. No PNI, a primeira dose é aos 12 meses e a segunda aos 15 meses (combinada com a varicela). SBP e SBIm recomendam uma dose aos 12 meses e a segunda entre 1 ano e 3 meses e 2 anos. Crianças mais velhas, adolescentes e adultos não vacinados: duas doses com intervalo de um a dois meses.",
    local_aplicacao: "Subcutânea.",
    cuidados: [
      "Pessoas que usaram medicamentos imunossupressores devem ser vacinadas pelo menos um mês após a suspensão do uso do medicamento.",
      "Pessoas em uso de quimioterápicos só podem ser vacinadas três meses após a suspensão do tratamento.",
      "Pessoas que receberam transplante de medula óssea só podem ser vacinadas de 12 a 24 meses após a cirurgia.",
      "É aconselhável evitar a gravidez por 30 dias após a vacinação.",
      "Qualquer sintoma grave e/ou inesperado após a vacinação deve ser notificado ao serviço que a realizou.",
      "Em caso de febre, adiar a vacinação até que ocorra a melhora.",
      "Compressas frias aliviam a reação no local da aplicação.",
      "Sintomas de eventos adversos graves ou persistentes, que se prolongam por mais de 24 a 72 horas, devem ser investigados.",
    ],
    efeitos_adversos: {
      locais:
        "Ardência, vermelhidão, dor e formação de nódulo em menos de 0,1% dos vacinados.",
      gerais:
        "Febre alta (5% a 15%), dor de cabeça, irritabilidade, febre baixa, lacrimejamento e vermelhidão dos olhos, coriza, manchas vermelhas no corpo (5%) e gânglios inchados.",
      raros: [
        "Inflamação das meninges (meningite).",
        "Inflamação do cérebro (encefalite).",
        "Manifestações hemorrágicas (púrpura trombocitopênica).",
        "Dor articular ou artrite em mulheres após a puberdade (25%).",
        "Inflamação das glândulas parótidas (0,7% a 2%).",
        "Anafilaxia (muito rara).",
      ],
    },
  },
  {
    vacina: "Vacina Varicela",
    previne: "Varicela (catapora).",
    composicao:
      "Vacina atenuada, contendo vírus vivos “enfraquecidos” da varicela, além de gelatina, traços de neomicina e água para injeção. Não contém traços de proteína do ovo de galinha.",
    indicacao:
      "Recomendada de rotina para crianças com mais de 12 meses (excepcionalmente, a partir de 9 meses em situações de surto). Todas as crianças, adolescentes e adultos suscetíveis (que não tiveram catapora) devem ser vacinados.",
    contraindicacao: [
      "Pessoas que tiveram anafilaxia causada por qualquer dos componentes da vacina ou após dose anterior.",
      "Gestantes.",
      "Pessoas com deficiência do sistema imunológico (avaliação médica necessária).",
    ],
    esquema_doses: {
      pni: "Uma única dose, na apresentação SCR-V, aplicada nas crianças com 15 meses.",
      sbp_sbim:
        "Duas doses: a primeira aos 12 meses e a seguinte entre 15 e 24 meses de idade.",
      criancas_mais_velhas_adolescentes_e_adultos:
        "Duas doses com intervalo de um a dois meses.",
      surto:
        "Em situação de surto, a vacina pode ser aplicada em bebês a partir de 9 meses (a dose é desconsiderada e a criança deverá tomar as duas doses de rotina).",
    },
    local_aplicacao: "Subcutânea.",
    cuidados: [
      "Crianças que usaram medicamentos imunossupressores podem ser vacinadas pelo menos um mês após a suspensão do uso.",
      "Crianças em uso de quimioterapia para tratar o câncer só podem ser vacinadas três meses após a suspensão do tratamento.",
      "Crianças que receberam transplante de medula óssea só podem ser vacinadas de 12 a 24 meses após o procedimento.",
      "Qualquer sintoma grave e/ou inesperado após a vacinação deve ser notificado ao serviço que a realizou.",
      "Em caso de febre, adiar a vacinação até que ocorra a melhora.",
      "Compressas frias aliviam a reação no local da aplicação.",
      "Sintomas de eventos adversos graves ou persistentes, que se prolongam por mais de 24 a 72 horas, devem ser investigados.",
    ],
    efeitos_adversos: {
      gerais:
        "Taxa de eventos adversos variando de 5% a 35% em indivíduos imunocompetentes.",
      locais:
        "Dor (26%) e vermelhidão (5%) no local da aplicação. Vesículas próximas ao local em 1% a 3%.",
      exantema:
        "Exantema pelo corpo, semelhante à catapora, em 3% a 5% dos indivíduos, com duas a cinco lesões, aparecendo entre cinco e 26 dias após a vacinação.",
    },
  },
];

export default vacinas;
