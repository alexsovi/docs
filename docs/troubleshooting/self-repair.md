---
description: Как самостоятельно решить проблему
---
# Самостоятельное решение проблем

Крашится игра?
Вы можете попробовать найти причину проблемы самостоятельно.
Для этого нажмите в окне ошибки кнопку "открыть логи" или включите в настройках лаунчера "журнал событий". Ниже мы перечислим относительно простые и распространенные проблемы запуска игры с модами.  
**Все примеры ниже основаны на реальных обращениях наших пользователей**.

## Forge - ошибка мода
В конце лога должен быть краш. Он выглядит как череда строчек, начинающихся на `at`:
```log title="Пример лога"
> Exception in thread "main" [00:23:02] [main/INFO] [STDERR/]: [java.lang.ThreadGroup:uncaughtException:1069]: java.lang.RuntimeException: java.lang.reflect.InvocationTargetException
> [00:23:02] [main/INFO] [STDERR/]: [java.lang.ThreadGroup:uncaughtException:1069]:     at cpw.mods.modlauncher.LaunchServiceHandlerDecorator.launch(LaunchServiceHandlerDecorator.java:39)
> [00:23:02] [main/INFO] [STDERR/]: [java.lang.ThreadGroup:uncaughtException:1078]:     ... 4 more
> [00:23:02] [main/INFO] [STDERR/]: [java.lang.Throwable:printStackTrace:659]: Caused by: org.spongepowered.asm.mixin.transformer.throwables.MixinTransformerError: An unexpected critical error was encountered
> [00:23:02] [main/INFO] [STDERR/]: [java.lang.Throwable:printStackTrace:659]:  at org.spongepowered.asm.mixin.transformer.MixinProcessor.applyMixins(MixinProcessor.java:392)
> [00:23:02] [main/INFO] [STDERR/]: [java.lang.Throwable:printStackTrace:659]:  at org.spongepowered.asm.mixin.transformer.MixinTransformer.transformClass(MixinTransformer.java:250)
> [00:23:02] [main/INFO] [STDERR/]: [java.lang.Throwable:printStackTrace:659]:  at org.spongepowered.asm.service.modlauncher.MixinTransformationHandler.processClass(MixinTransformationHandler.java:131)
> [00:23:02] [main/INFO] [STDERR/]: [java.lang.Throwable:printStackTrace:659]:  ... 10 more
> [00:23:02] [main/INFO] [STDERR/]: [java.lang.Throwable:printStackTrace:682]: Caused by: org.spongepowered.asm.mixin.injection.throwables.InjectionError: Critical injection failure: Redirector redirectGetFancyWeather()Z in magnesium.mixins.json:features.options.MixinWorldRenderer failed injection check, (0/1) succeeded. Scanned 1 target(s). Using refmap magnesium.refmap.json
> [00:23:02] [main/INFO] [STDERR/]: [java.lang.Throwable:printStackTrace:682]:  at org.spongepowered.asm.mixin.injection.struct.InjectionInfo.postInject(InjectionInfo.java:468)
> [00:23:02] [main/INFO] [STDERR/]: [java.lang.Throwable:printStackTrace:682]:  at org.spongepowered.asm.mixin.transformer.MixinTargetContext.applyInjections(MixinTargetContext.java:1362)
> [00:23:02] [main/INFO] [STDERR/]: [java.lang.Throwable:printStackTrace:682]:  ... 25 more
```
Посмотрите на строчку, начинающуюся на `Caused by`: в ней мы видим, что проблема в моде magnesium: `Critical injection failure: Redirector redirectGetFancyWeather()Z in magnesium.mixins.json:features.options.MixinWorldRenderer failed injection check`.  
Скорее всего, этот мод и стал причиной ошибки. Удаление мода поможет запустить игру.

:::tip[Старые версии Forge]
Старые версии Forge рисовали таблицу со списком модов:
```log title="Пример лога"
[:]     | State | ID             | Version      | Source                                    | Signature                                |
[:]     |:----- |:-------------- |:------------ |:----------------------------------------- |:---------------------------------------- |
[:]     | LCH   | minecraft      | 1.12.2       | minecraft.jar                             | None                                     |
[:]     | LCH   | mcp            | 9.42         | minecraft.jar                             | None                                     |
[:]     | LCH   | FML            | 8.0.99.99    | forge-1.12.2-14.23.5.2860.jar             | e3c3d50c7c986df74c645c0ac54639741c90a557 |
[:]     | LCH   | forge          | 14.23.5.2860 | forge-1.12.2-14.23.5.2860.jar             | e3c3d50c7c986df74c645c0ac54639741c90a557 |
[:]     | LCE   | xujmod         | 2.0.8        | xujmod-2.0.8.jar                          | None                                     |
```
Наличие буквы `E` в столбце "State" сигнализирует об ошибке в моде. Например, в этом примере сломался `xujmod`. После удаления сломанных модов игра заработает.
:::

## Forge - нехватка мода
```log title="Пример лога"
[:] net.minecraftforge.fml.common.LoaderExceptionModCrash: Caught exception from XujMod (xujmod)
[:] Caused by: java.lang.NoClassDefFoundError: blusunrize/immersiveengineering/common/items/ItemIEBase
[:]     at net.lasernet.xuj.ModItems.init(ModItems.java:55)
[:]     at net.lasernet.xuj.XujMod.preInit(XujMod.java:60)
```
Ошибка `NoClassDefFoundError` обычно сигнализирует об отсутствующем моде. Из этой строчки мы видим, что не хватает мода `immersiveengineering`. После установки всех требуемых модов игра заработает.
```log title="Пример лога"
> [17:01:14] [main/ERROR] [ne.mi.fm.lo.ModSorter/LOADING]: Missing or unsupported mandatory dependencies:
>   Mod ID: 'valhelsia_core', Requested by: 'valhelsia_structures', Expected range: '[1.1.1,)', Actual version: '[MISSING]'
```
:::tip[Подобные строки появляются **в начале** лога]
:::
По этой строке видно, что моду `valhelsia_structures` нужен мод `valhelsia_core` версии `1.1.1` или новее, который сейчас не установлен (`MISSING`). После установки всех требуемых модов **соответствующих версий** игра запустится.

## Forge - некорректное название мода
После перехода игры на Java 17 Forge может крашиться из-за некорректных названий модов. Не рекомендуется переименовывать моды кириллицей.
```log title="Пример лога"
> Exception in thread "main" java.lang.IllegalArgumentException: 1.0-1.18+: Empty pre-release
>   at java.base/java.lang.module.ModuleDescriptor$Version.<init>(ModuleDescriptor.java:1054)
>   at java.base/java.lang.module.ModuleDescriptor$Version.parse(ModuleDescriptor.java:1090)
```
По строке `1.0-1.18+: Empty pre-release` мы видим, что Forge не может понять строку "`1.0-1.18+`" какого-то мода. Посмотрев в папку с модами, мы находим файл `lazydfu-1.0-1.18+`. После переименования мода, например, в `lazydfu-1.0` игра заработает.

## Forge - дубликаты модов
```log title="Пример лога"
> Exception in thread "main" [16:41:20] [main/INFO] [STDERR/]: [java.lang.ThreadGroup:uncaughtException:1069]: java.lang.RuntimeException: java.lang.reflect.InvocationTargetException
> [16:41:20] [main/INFO] [STDERR/]: [java.lang.ThreadGroup:uncaughtException:1069]:     at cpw.mods.modlauncher.LaunchServiceHandlerDecorator.launch(LaunchServiceHandlerDecorator.java:39)
> [16:41:20] [main/INFO] [STDERR/]: [java.lang.ThreadGroup:uncaughtException:1078]: Caused by: java.lang.reflect.InvocationTargetException
> [16:41:20] [main/INFO] [STDERR/]: [java.lang.ThreadGroup:uncaughtException:1078]:     at java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)
> [16:41:20] [main/INFO] [STDERR/]: [java.lang.Throwable:printStackTrace:659]: Caused by: java.lang.ClassFormatError: Duplicate interface name "xaero/common/minimap/mcworld/IXaeroMinimapClientWorld" in class file net/minecraft/client/world/ClientWorld
> [16:41:20] [main/INFO] [STDERR/]: [java.lang.Throwable:printStackTrace:659]:  at java.base/java.lang.ClassLoader.defineClass1(Native Method)
```
Ошибка `java.lang.ClassFormatError: Duplicate interface name ... in class file ...` сигнализирует нам об установленном дважды моде. После удаления дубликата (название мода, как правило, можно выяснить из текста ошибки, для примера выше это `XaeroMinimap`) игра запустится.

## Fabric - сломанный мод
```log title="Пример лога"
> java.lang.RuntimeException: Could not execute entrypoint stage 'main' due to errors, provided by 'bosses_of_mass_destruction'!
>   at net.fabricmc.loader.impl.FabricLoaderImpl.lambda$invokeEntrypoints$2(FabricLoaderImpl.java:388)
>   Suppressed: java.lang.NoClassDefFoundError: Could not initialize class net.barribob.maelstrom.MaelstromMod
>       at net.barribob.maelstrom.MaelstromModKt.init(MaelstromMod.kt:46)

```
По этому логу мы видим, что запуску игры помешал мод `bosses_of_mass_destruction`, которому, в свою очередь, помешала ошибка мода `Maelstrom`. После замены мода `Maelstrom` или удаления мода `bosses_of_mass_destruction` ошибка, скорее всего, пропадет
```log title="Пример лога"
> java.lang.RuntimeException: Mixin transformation of net.minecraft.class_372 failed
>   at net.fabricmc.loader.impl.launch.knot.KnotClassDelegate.getPostMixinClassByteArray(KnotClassDelegate.java:427)
> Caused by: org.spongepowered.asm.mixin.transformer.throwables.MixinTransformerError: An unexpected critical error was encountered
>   at org.spongepowered.asm.mixin.transformer.MixinProcessor.applyMixins(MixinProcessor.java:392)
> Caused by: org.spongepowered.asm.mixin.throwables.MixinApplyError: Mixin [sodium-extra.mixins.json:toasts.MixinTutorialToast from mod sodium-extra] from phase [DEFAULT] in config [sodium-extra.mixins.json] FAILED during APPLY
>   at org.spongepowered.asm.mixin.transformer.MixinProcessor.handleMixinError(MixinProcessor.java:638)
> Caused by: org.spongepowered.asm.mixin.injection.throwables.InvalidInjectionException: Invalid descriptor on sodium-extra.mixins.json:toasts.MixinTutorialToast from mod sodium-extra->@Inject::draw(Lnet/minecraft/class_4587;Lnet/minecraft/class_374;JLorg/spongepowered/asm/mixin/injection/callback/CallbackInfoReturnable;)V! Expected (Lnet/minecraft/class_332;Lnet/minecraft/class_374;JLorg/spongepowered/asm/mixin/injection/callback/CallbackInfoReturnable;)V but found (Lnet/minecraft/class_4587;Lnet/minecraft/class_374;JLorg/spongepowered/asm/mixin/injection/callback/CallbackInfoReturnable;)V [INJECT Applicator Phase -> sodium-extra.mixins.json:toasts.MixinTutorialToast from mod sodium-extra -> Apply Injections ->  -> Inject -> sodium-extra.mixins.json:toasts.MixinTutorialToast from mod sodium-extra->@Inject::draw(Lnet/minecraft/class_4587;Lnet/minecraft/class_374;JLorg/spongepowered/asm/mixin/injection/callback/CallbackInfoReturnable;)V]
>   at org.spongepowered.asm.mixin.injection.callback.CallbackInjector.inject(CallbackInjector.java:567)
```
На этот раз Fabric нам не может явно указать на проблемный мод, но мы можем узнать его из сообщения о причинах ошибки (`Caused by:`): `Caused by: org.spongepowered.asm.mixin.throwables.MixinApplyError: Mixin [sodium-extra.mixins.json:toasts.MixinTutorialToast from mod sodium-extra]`.  
Мы видим, что проблемой стал мод `sodium-extra`, и после его удаления игра, скорее всего, запустится

## Повреждение мода
```log title="Пример лога"
Exception in thread "main" cpw.mods.niofs.union.UnionFileSystem$UncheckedIOException: java.util.zip.ZipException: zip END header not found
Caused by: java.util.zip.ZipException: zip END header not found
    at jdk.zipfs/jdk.nio.zipfs.ZipFileSystem.findEND(ZipFileSystem.java:1315)

```
Ошибка `java.util.zip.ZipException: zip END header not found` в логе сигнализирует о повреждении файлов игры и/или модов. Воспользуйтесь галочкой "обновить клиент", перекачайте моды с CurseForge/Modrinth
:::tip[Особенности Fabric]
Fabric хранит часть данных игры в папке `.fabric` в папке игры. При возникновении подобной ошибки с Fabric рекомендуется удалить эту папку
:::

## Повреждение конфигов
```log title="Пример лога"
> net.minecraftforge.fml.config.ConfigFileTypeHandler$ConfigLoadingException: Failed loading config file flywheel-client.toml of type CLIENT for modid flywheel
>   at net.minecraftforge.fml.config.ConfigFileTypeHandler.lambda$reader$1(ConfigFileTypeHandler.java:47) ~[forge:?] {re:classloading}
>   at net.minecraftforge.fml.config.ConfigTracker.openConfig(ConfigTracker.java:90) ~[forge:?] {re:classloading}
> Caused by: com.electronwill.nightconfig.core.io.ParsingException: Not enough data available
>   at com.electronwill.nightconfig.core.io.ParsingException.notEnoughData(ParsingException.java:22) ~[core-3.6.3.jar:?] {}
```
Подобные ошибки характеризуются наличием слова "config" или "settings" в ошибке. В данном примере можно увидеть, что поломался файл настроек `flywheel-client.toml` мода `flywheel`.  
Подобные проблемы решаются крайне просто - удалением соответствующего файла из папки `config` в папке игры, либо удалением всей папки `config` целиком - моды пересоздадут свои файлы настроек.