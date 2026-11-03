import os
import zipfile
import time

out_dir = "out"
zip_path = "deploy.zip"

if os.path.exists(zip_path):
    os.remove(zip_path)

now = time.localtime(time.time())[:6]

with zipfile.ZipFile(zip_path, "w", zipfile.ZIP_DEFLATED) as zipf:
    for root, dirs, files in os.walk(out_dir):
        for d in dirs:
            dir_path = os.path.join(root, d)
            rel_path = os.path.relpath(dir_path, out_dir).replace("\\", "/") + "/"
            zinfo = zipfile.ZipInfo(rel_path, now)
            zinfo.external_attr = 0o755 << 16 | 0x10
            zipf.writestr(zinfo, b"")
        for file in files:
            if file.endswith(".zip"):
                continue
            file_path = os.path.join(root, file)
            rel_path = os.path.relpath(file_path, out_dir).replace("\\", "/")
            zinfo = zipfile.ZipInfo(rel_path, now)
            zinfo.compress_type = zipfile.ZIP_DEFLATED
            zinfo.external_attr = 0o644 << 16
            with open(file_path, "rb") as f:
                zipf.writestr(zinfo, f.read())

print(f"[OK] Generated Linux/cPanel POSIX-compliant {zip_path}")
