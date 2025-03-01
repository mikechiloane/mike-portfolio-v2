import os

def rename_images(directory):
    # Get a list of all files in the directory
    files = os.listdir(directory)

    # Filter out only the files that match the format "WhatsApp Image YYYY-MM-DD at HH.MM.SS.jpeg"
    images = [f for f in files if f.endswith(".jpeg")]

    # Sort the images to ensure they are renamed in order
    images.sort()

    # Rename each image to a numbered format
    for index, filename in enumerate(images, start=1):
        new_name = f"{index}.png"
        old_path = os.path.join(directory, filename)
        new_path = os.path.join(directory, new_name)
        os.rename(old_path, new_path)
        print(f"Renamed: {old_path} to {new_path}")

# Specify the directory containing the images
directory = "stack"
rename_images(directory)