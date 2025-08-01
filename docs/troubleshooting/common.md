---
description: Не получается запустить игру? Не даёт войти на сервер или в мир?
sidebar_position: 1
---
# Решение частых проблем
Пошаговая инструкция для решения самых популярных проблем
:::info
Если благодаря этой инструкции вы нашли причину проблемы, пожалуйста, не обращайтесь в нашу техподдержку - мы не сможем вам помочь. Обратитесь к автору проблемного мода!
:::

## Проблемы с лаунчером {#launcher-issues}

### Пропали все миры, аккаунты, версии! {#config-reset}
Такое случается при повреждении файла конфигурации лаунчера.  
Все ваши данные никуда не пропали и лежат там же, где и были - просто теперь лаунчер ищет их в другом месте (папке по умолчанию).  
Зайдите в [настройки лаунчера](../launcher/settings) и укажите правильный путь к папке игры
:::tip[Как найти папку игры]
Вспомните название одной из версий или миров и используйте поиск Windows
:::
:::note
Папка игры должна содержать как минимум папки `assets`, `libraries` и `versions`. Если вы не видите этих папок - вероятно, это не папка игры, а "[подпапка по версиям](../launcher/subfolders)"
:::
:::tip
Не забудьте восстановить и прочие [настройки лаунчера](../launcher/settings), т.к. файл конфигурации был сброшен на стандартный
:::
:::warning
Мы рекомендуем вам проверить жесткий диск на ошибки и попробовать галочку "обновить клиент" - повреждение файла конфигурации лаунчера обычно вызвано некорректной работой ОС или проблемами с диском
:::

### Лаунчер долго запускается! {#slow-launch}
Это известная проблема, которую мы уже долго пытаемся побороть. Обычно она случается при недоступности одного из основных зеркал лаунчера.  
Попробуйте [эту инструкцию](./slow-launch) или VPN.

### Не могу запустить лаунчер без интернета! {#no-internet}
Пожалуйста, сохраните диагностику - вам может помочь [вот эта инструкция](../support/launcher) и пришлите её нам позднее.  
Кроме того, вам может может помочь полное отключение интернета (выдергивание кабеля/отключение от Wi-Fi) 

### Не установить новые версии, они не отображаются! {#no-versions}
Убедитесь, что в настройках лаунчера **включена** галочка "Загружать с сервера" и **отключена** галочка "Только установленные"

## Проблемы со входом в мир, на сервера {#no-crashes}
Игра не крашится, но просто выдает ошибку при входе на сервер/в одиночный мир?

### Проверьте ваш никнейм {#nickname}
Различные версии игры имеют разные требования к ником. Самым универсальным является никнейм длиной **не более 16 символов, состоящий из латинских букв, цифр, и символов `_-.`.**  
Некорректный никнейм может мешать входу на сервера и даже в одиночную игру.

### Проверьте интернет-подключение {#connection}
Не можете подключиться к серверу? Не можете войти в аккаунт? Медленно скачивается игра? Попробуйте включить VPN и проверить наличие проблемы. Если она ушла - проблемы на стороне вашего провайдера (блокировки?)
:::tip
В некоторых случаях ПО для борьбы с блокировками может **мешать** работе игры. Попробуйте отключить прокси, VPN, GoodbyeDPI, Zapret и прочие "разблокировщики" и "ускорители".  
Особо стоит выделить программу SafeIP - **не используйте её, она приводит к крашам игры и крайне сложна в удалении!**
:::
:::note
Попробуйте подключиться к какому-нибудь другому серверу. Если проблема возникает **со всеми** серверами - то, скорее всего, проблема на стороне вашего ПК - например, в антивирусе
:::

### Антивирусы {#av-software}
Отдельно стоит выделить проблемы, вызываемые антивирусами.  
Скачивание игры замирает на конкретном количестве файлов? Лаунчер не может запуститься или обновиться? Скорее всего, этому процессу мешает антивирус, попробуйте временно его отключить или добавить лаунчер в его исключения.

### Крашится при установке ресурспака? {#server-resources}
Попробуйте установить ресурспак вручную. Попробуйте другую версию игры

### Случайные краши на сервере? {#server-crashes}
Многие сервера, рассчитанные на несколько версий игры одновременно, наводняют игру ошибками, посылая некорректные данные клиентам. Некоторые версии игры и некоторые моды весьма чувствительны к подобным ошибкам и вызывают краш игры. Попробуйте другую версию игры, другой набор модификаций, или, если ничего не помогает - другой сервер.

## Проблемы с запуском игры, краши во время игры {#crashes}
Крашится игра? "Что-то пошло не так"? Вам сюда!

### Проверьте подключенные устройства {#input-devices}
Попробуйте отключить рули, геймпады, джойстики - некоторые устройства (особенно китайских производителей) могут вызывать краши Minecraft из-за ошибок GLFW

### Игра сломалась после установки конкретного мода {#known-mod}
Вы уже знаете причину ошибки - это этот самый мод. Обратитесь к автору мода.

### Проверьте наличие места на диске {#check-free-space}
Как бы банально это не звучало, но очень многие про это забывают. Игра не будет работать, если на жестком диске осталось мало места.

### Проверьте запускаемую версию игры {#check-version}
Самая частая проблема - когда вы установили моды для одной версии игры или загрузчика модов, а запускаете другую. **Проверьте моды!**
:::note
Внимательно проверяйте версию игры. Очень часто игроки путают, например, `1.12` и `1.12.2`, или `1.20.1` и `1.21`. **Моды пишутся строго под конкретную версию игры** и, скорее всего, не запустятся на более новой или старой версии. **Будьте внимательны!**
::: 
:::warning
**Даже если вы уверены**, что не устанавливали моды, но запускаете версию с их поддержкой (т.е. с Forge/Fabric...), всё равно проверьте папку с модами!
:::
:::tip
Использование [подпапок по версиям](../launcher/subfolders) поможет избежать подобных проблем
:::

### Проверьте выбранную версию Java {#check-java-version}
Большинство версий Minecraft требуют специфичную версию Java. Попробуйте запустить игру с "рекомендуемой" версией Java

### Удаление дубликатов модов {#remove-duplicates}
Большинство загрузчиков модов входят в ступор, когда видят несколько версий одного мода. Убедитесь, что каждый мод установлен единожды.  
На старых версиях игры моды можно было устанавливать как в папку `mods`, так и в `mods/номер-версии`. **Проверьте обе этих папки**.
:::note[BetterPVP и Xaero Minimap]
BetterPVP уже содержит Xaero Minimap, эти моды будут конфликтовать
:::
:::note[OptiFine]
Если вы выбрали версию с OptiFine, например, "ForgeOptiFine" - **удалите OptiFine из папки mods** или **выберите версию без OptiFine, например, просто "Forge"**. OptiFine в версии и в папке модов **будут конфликтовать!**
:::
:::tip
Некоторые моды для старых версий (таких, как 1.7.10 и 1.12.2) могут автоматически скачивать и оставлять свои файлы в папке `mods/номер-версии`. Внимательно проверяйте её содержимое при удалении мода - вы можете забыть удалить его компонент, который в итоге будет вызывать краш
:::

### Удаление OptiFine {#remove-optifine}
Да, это настолько частое решение, что мы его выделили в отдельный пункт.  
Очень многие моды конфликтуют с OptiFine. Первый шаг - удалить OptiFine (выбрать версию без OptiFine и удалить файлы OptiFine из папки модов) и проверить, запускается ли игра. Если вы используете Fabric - **не используйте OptiFine и OptiFabric!**
:::note
Если этот шаг не помог, не возвращайте OptiFine. Продолжайте следующие шаги без него. Вы всегда можете попробовать вернуть OptiFine после нахождения источника проблемы (но мы рекомендуем использовать [альтернативы](../faq/optifine-alternatives))
:::

### Проверьте моды на конфликты {#mod-conflicts}
Возможно, вы установили несовместимую комбинацию модов. Самые популярные несовместимые комбинации:
* OptiFine и Sodium (Magnesium, Rubidium, Embeddium...) или Iris (Oculus). Удалите OptiFine 
* OptiFine и Connector. Удалите OptiFine.
* Установка одновременно разных портов Sodium (например, Rubidium и Embeddium).
* Разные версии AE2 и аддонов к нему (например, AE2 rv3, а аддоны - для rv2)
* VulkanMod. Он конфликтует практически со всеми модами (в частности, OptiFine, Sodium и иже с ними)
* DistantHorisons очень требователен к версии Sodium/Iris
* Sodium до версии 0.6.0 ломает многие моды для Fabric, если не установлен [Indium](https://modrinth.com/mod/indium)
* Многие моды для Fabric требуют мод `fabric` (он же `fabric-api`, в его состав входят многие моды с названиями `fabric-api-чтототам` или `fabric-чтототам-api`). [Установите его](https://modrinth.com/mod/fabric-api)
* Очень часто причинами конфликтов становятся моды MorePlayerModels, CustomNPCs, EpicFight

### Проверьте наличие заведомо неработоспособных модов {#broken-mods}
* Удалите [визуалы и подобные им моды](/mods/specific/visuals)
* Большинство читов, софтов, кряков и прочих модификаций, **особенно** требующих `-noverify` для своего запуска, будут крашиться на любой чих. Не используйте их!
* OptiFabric приводит к неработоспособности многих модов. Не используйте его.
* MemoryLeakFix и NotEnoughCrashes ломаются после обновления Fabric
* ModernFix ломается после обновления Forge
* Решения проблем с некоторыми самыми популярными модами можно найти [здесь](/mod-specific)

### Проверьте наличие сообщений от загрузчика мода
:::note[TODO!]
Сюда требуются примеры окон ошибок Forge, Fabric, Quilt
:::
Многие загрузчики модов способны выдать окно с описанием проблемы. Часто загрузчик модов указывает на наличие дубликатов, отсутствие необходимого мода или неправильную версию мода/игры.
:::tip
Если сообщение написано на английском и вы не можете его понять - воспользуйтесь любым переводчиком, например, Google Translate или Яндекс.Переводчик. При установке на телефон они даже могут распознавать текст через камеру!
:::

### Попробуйте сбросить файлы конфигурации {#drop-configs}
Частой проблемой является повреждение файлов конфигурации. Переименуйте папку `config` в папке игры (можете и удалить, но вдруг там есть что-то важное для вас?) и попробуйте запустить игру.

### Попробуйте галочку "обновить клиент" {#force-update}
У вас могут быть повреждены файлы игры. Перекачайте игровые файлы галочкой "Обновить клиент" или [переустановите версию вручную](/tags/modloader).

### Проверьте настройки лаунчера {#check-args}
Зайдите в настройки Java в настройках лаунчера. Попробуйте удалить оттуда все вписанные аргументы JVM.

## Ничего не помогает? {#support}
[Обратитесь в поддержку](../support/game) или попробуйте [инструкцию по самостоятельной диагностике](./self-repair)
