Task Generator Control Panel
===========

Панель управления генератором банка задач на базе MiKTeX и Jupyter Notebook.

Для начала работы необходимо:
* скачать данный репозиторий (панель управления с настройками и примером параметризации);
* установить модуль ядра из репозитория pip (https://pypi.org/project/taskgen/): ``python -m pip install taskgen --upgrade --user``, а также доустановить требуемые зависимости, если это не произошло автоматически;
* по порядку выполнить все ячейки панели управления (control_panel.ipynb).

Полного пошагово туториала еще нет, но есть:
* страничка, кратко, описывающая основные моменты в работе программы - https://github.com/artyom-zolotarevskiy/taskgen/wiki;
* опубликованный пример параметризации задачи (см. папку «bank»);
* панель управления в виде файла "control_panel.ipynb", содержащая основные функции по управлению генераторм (они документированы как функции языка Python).


По всем вопросам: artyom@zolotarevskiy.ru.


Возможности
----------
Ядро в связке с панелью управления решают задачу генерации параметризованного банка задач 
для методического сопровождения различных математических дисциплин в ВУЗе.

В качестве языка разметки используется TeX на базе дистрибутива MiKTeX, а за параметризацию отвечает Python на базе
Jupyter Notebook, входящий в Anaconda.

Результатом работы является уникальный банк задач в форматах TeX, HTML, PDF и Moodle XML. В скором времени планируется 
добавить создание параметризированных интерактивных блокнотов Jupyter для учебного процесса.


Лицензия
-------
Copyright (c) 2023 Артём Золотаревский.

Связь с автором: artyom@zolotarevskiy.ru

Благодарности
-------
Отдельная благодарность научному руководителю, Павлу Евгеньевичу Рябову,
за постановку задачи и постоянное внимание к работе.


Научные публикации и конференции
-------

ПАРАМЕТРИЗАЦИЯ ЗАДАЧ ПО ДИСЦИПЛИНЕ «ТЕОРИЯ ВЕРОЯТНОСТЕЙ И МАТЕМАТИЧЕСКАЯ
СТАТИСТИКА» НА ПЛАТФОРМЕ MOODLE С ИСПОЛЬЗОВАНИЕМ ИНСТРУМЕНТАРИЯ JUPYTER
NOTEBOOK - 7 мая 2023.<br>
Тезисы доклада - https://zolotarevskiy.ru/files/conferences/taskgen/2023/05/07/abstract.pdf<br>
Презентация - https://zolotarevskiy.ru/files/conferences/taskgen/2023/05/07/presentation.pdf<br>
Примерный текст доклада - https://zolotarevskiy.ru/files/conferences/taskgen/2023/05/07/paper.pdf<br>
Видео запись доклада - https://zolotarevskiy.ru/files/conferences/taskgen/2023/05/07/video.mp4<br>

ОБ ОДНОЙ ПРОБЛЕМЕ ПЛАГИНА «QTYPE_FORMULAS» НА ПЛАТФОРМЕ «MOODLE» - 4 апреля 2023 г.<br>
Тезисы доклада - https://zolotarevskiy.ru/files/conferences/taskgen/2023/04/12/abstract.pdf

PYTHONTEX КАК ОСНОВА АВТОМАТИЧЕСКОЙ СИСТЕМЫ ГЕНЕРАЦИИ БАНКА ЗАДАЧ - 9 июня 2022 г.<br>
Обзорная статья по используемым технологиям и возможностям первой версии генератора.<br>
Текст статьи - https://zolotarevskiy.ru/files/conferences/taskgen/2022/paper.pdf<br>
Презентация - https://zolotarevskiy.ru/files/conferences/taskgen/2022/presentation.pdf<br>
Сертификат участника - https://zolotarevskiy.ru/files/conferences/taskgen/2022/certificate_of_the_participant.pdf
