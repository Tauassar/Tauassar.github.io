import os

def renameDir(directory_to_change):
    dirs_and_files = os.listdir(directory_to_change)
    counter = 1
    dirs = filter(isDir, dirs_and_files)
    files = filter(isFile, dirs_and_files)
    for file in files:
        renameFile(directory_to_change+'/', file, counter)
        counter+=1
    for dir_from_list in dirs:
        renameDir(directory_to_change+dir_from_list+'/')

def renameFile(filepath, file, counter):
    extension = file[file.find('.'):]
    os.rename(filepath+file, filepath+str(counter)+extension)

def isFile(path):
    if path.find('rename.py')!= -1:
        return False
    if path.find('.') != -1:
        return True
    else:
        return False

def isDir(path):
    if path.find('.') == -1:
        return True
    else:
        return False

renameDir('./')
