# coding: utf-8
"""

Abstract::
    - 
History::
    - Ver.      Date            Author        History
    - 

"""
# Standard libraries 

# External libraries

# Internal libraries
from app.app import create_app, socketio


app = create_app()


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
