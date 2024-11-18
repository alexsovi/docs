---
description: Got a lot of crashes while playing?
---
# Solving common issues
:::info
This page requires localization of screenshots. Feel free to [open a PR](https://github.com/LegacyLauncher/docs) if you want to help!
:::

Do you often see `EXCEPTION_ACCESS_VIOLATION` errors in the logs or Minecraft crashes with `exit code` of a bunch of numbers? Try this manual!

## Check your PC load {#check-load}
Open "Task Manager". Make sure you have enough free RAM. Make sure you have swap file (page file) enabled. Make sure you've checked "Automatically manage pagind file size for all drives" checkbox, or at least one drive has a paging file with with "system managed size"
:::tip
There is a [manual for Windows](https://www.tomshardware.com/news/how-to-manage-virtual-memory-pagefile-windows-10,36929.html)
:::

## Try another Java distribution {#replace-java}
We have prepared a ready-for-use Java replacement package for you. Use [this manual](../faq/custom-java#how-to-simplified).

## Disable "Optimized arguments" {#disable-arguments}
The launcher adds a set of Java settings focused on smoother and more stable game performance, but in some cases the effect may be the opposite.
1. Open the Launcher settings, on the "Minecraft" tab go to Java settings
    ![Settings => Minecraft => Java => Java => "Customize"](./img/jre-settings-ru-0.png)
2. In the window that opens, uncheck the "Add optimized arguments" box

## Remove heavy graphics mods {#remove-graphics-mods}
* Disable shaders
* Choose a version without OptiFine
* Remove the OptiFine, Sodium, Iris and similar mods from the mods folder

## Remove unstable mods {#remove-bad-mods}
The following mods are known for their instability and tendency to crash the game:
* Mods by topka
* Mods by sacura
* Mods by darkness
* Mods by xorek

Removing these mods in most cases restores the game's functionality.

## GPU driver {#gpu-driver}
Often game issues are caused by an updated or defective video card driver.
* Try updating your GPU driver
* If the problem started after updating the driver, or the problem does not solve - try to roll back the video card driver
    * To do this, you will need to download and install an older version of the driver
        * NVIDIA: [Driver Version Archive](https://www.nvidia.com/Download/Find.aspx)
        * AMD: Find your device on [Support Portal](https://www.amd.com/en/support) (don't forget to click "Submit"!) and click the inconspicuous "Previous Drivers" link at the end of the list of drivers on the page that opens.

## Windows-specific problems {#windows}
In some cases, the game cannot start due to Windows corruption.
1. Open the Start menu
2. Type "Command Prompt"
    ![Search for Command Prompt in Start](./img/command-prompt-ru-0.png)
3. Select "Run as administrator" and confirm the startup
    ![Run as administrator](./img/command-prompt-ru-1.png)
4. In the opened window type `sfc /scannow` and press Enter
    ![Run command](./img/command-prompt-ru-2.png)
5. Wait for a message that the scan is complete and **no problems** or that **all** corrupted files have been restored.
    :::danger[Modified versions of Windows].
    If you are using a modified version of Windows, it may have corrupted or missing some components required to both run the game and restore Windows. Reinstall Windows using the original installation image
    :::

## Disable programs that inject into other programs {#injectors}
Game stability can be affected by programs that inject itself into other programs to optimize, overclock, monitor or cheat.
* Disable all trainers, injectors, cheats
* Disable Discord, GeForce Experience (NVIDIA) and other program overlays
* Disable or remove RivaTuner Statistics Server, MSI Afterburner and simular software
* Some VPNs and proxies behave as unwanted software, for example SafeIP. Uninstall such programs.
* Check your PC for viruses, remove malware.
* Try temporarily disabling antivirus

## Nothing works?
We're afraid that's the end of the ways to solve this problem. But you can try installing another operating system - Linux - and play Minecraft on it.
