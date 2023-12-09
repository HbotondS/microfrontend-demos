from jinja2 import Environment, FileSystemLoader
import os

def create_config(location: str):
    # Define the path to the templates  
    file_loader = FileSystemLoader('/workspaces/microfrontends-demo/' + location)

    # Initialize the Jinja environment
    env = Environment(loader=file_loader)

    # Load the template
    template = env.get_template('webpack.config.js.j2')

    # Get the current codespace URL
    codespace_name = os.getenv('CODESPACE_NAME', 'No codespace URL found')

    # Render the template with the codespace URL
    output = template.render(name=codespace_name)

    # Save the rendered template to the webpack.config.js file
    with open('/workspaces/microfrontends-demo/' + location + '/webpack.config.codespace.js', 'w') as f:
        f.write(output)

create_config('remote/')
create_config('host/')
