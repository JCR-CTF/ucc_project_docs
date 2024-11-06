import os

def create_structure(base_path, structure, level=0):
    # Create base directory if it doesn't exist
    os.makedirs(base_path, exist_ok=True)
    
    for item, sub_items in structure.items():
        # Handle intro.md file specially
        if item == "intro.md":
            file_path = os.path.join(base_path, item)
            if not os.path.exists(file_path):
                with open(file_path, 'w') as f:
                    f.write("# Introduction\n\nContent for introduction goes here.")
            continue
            
        # For all other items, create directories and their content
        path = os.path.join(base_path, item)
        os.makedirs(path, exist_ok=True)
        
        # Create _category_.json
        category_file = os.path.join(path, '_category_.json')
        with open(category_file, 'w') as f:
            f.write(f'{{\n  "label": "{item}",\n  "position": {level + 2},\n  "link": {{\n    "type": "generated-index"\n  }}\n}}')
        
        # If sub_items is a dictionary, recursively create structure
        if isinstance(sub_items, dict):
            create_structure(path, sub_items, level + 1)
        # If sub_items is None, create a markdown file
        elif sub_items is None:
            file_path = os.path.join(path, f"{item}.md")
            if not os.path.exists(file_path):
                with open(file_path, 'w') as f:
                    f.write(f"# {item}\n\nContent for {item} goes here.")

# Define the structure
structure = {
    "intro.md": None,
    "LMS": {
        "Authentication": {
            "Login": None,
            "Regisration": None,
            "Password Reset": None,
        },
        "Courses": {
            "Access": {
                "CourseContent": None,
                "Enrolment": None,
            },
            "Assignments": {
                "AssignmentContent": None,
                "Grade": None,
            },
            "Course Exit": None
        }
    },
    "SIMULATION": {
        "Authentication": {
            "Login": None,
            "Regisration": None,
            "Password Reset": None
        },
        "Others": {
            "test": None
        }
    },
    "LABS": {
        "Challenges": {
            "Challenges Creation": None,
            "Challenges Deleting": None,
        },
        "Leaderboards": {
            "Checking Boards": None
        }
    }
}

# Set the base path to your docs folder
base_path = 'docs'

# Create the new structure
create_structure(base_path, structure)
print("New folders and files added successfully.")