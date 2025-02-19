from pycaw.pycaw import AudioUtilities, IAudioEndpointVolume
from ctypes import cast, POINTER
from comtypes import CLSCTX_ALL

# Получаем доступ к аудиоустройству
devices = AudioUtilities.GetSpeakers()
interface = devices.Activate(
    IAudioEndpointVolume._iid_, CLSCTX_ALL, None)
volume = cast(interface, POINTER(IAudioEndpointVolume))

# Устанавливаем громкость на 100%
volume.SetMasterVolumeLevelScalar(1.0, None)
print("Громкость установлена на 100%")
