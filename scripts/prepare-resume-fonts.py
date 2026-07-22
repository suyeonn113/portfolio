from pathlib import Path
import sys


ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "tmp" / "pdfs" / "font-tools"))

from fontTools.ttLib import TTFont  # noqa: E402
from fontTools.varLib.instancer import instantiateVariableFont  # noqa: E402


BUILD = ROOT / "tmp" / "pdfs" / "resume-build"
ALBERT = BUILD / "albert-sans-latin.woff2"
PRETENDARD = ROOT / "src" / "app" / "fonts" / "PretendardVariable.woff2"


def write_instance(source: Path, destination: Path, weight: int):
    font = TTFont(source)
    instance = instantiateVariableFont(font, {"wght": weight}, inplace=False)
    instance.flavor = None
    instance.save(destination)


def main():
    BUILD.mkdir(parents=True, exist_ok=True)
    write_instance(ALBERT, BUILD / "albert-450.ttf", 450)
    write_instance(ALBERT, BUILD / "albert-600.ttf", 600)
    write_instance(PRETENDARD, BUILD / "pretendard-450.ttf", 450)
    write_instance(PRETENDARD, BUILD / "pretendard-650.ttf", 650)
    print("Prepared Albert Sans and Pretendard print fonts")


if __name__ == "__main__":
    main()
