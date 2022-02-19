# -*- coding: utf-8 -*-
"""
Create app instance
"""

# Standard libraries
import os
from datetime import timedelta

# External libraries
from flask import Flask, render_template, jsonify, make_response

# Internal libraries


def create_app(
    engine: str, user: str, password: str, host: str, database: str
) -> Flask:
    """
    Create Flask Application Instance
    :@param host : database host (endpoint)
    :@param database : database name
    :@param user : database username
    :@param password : database user password
    :return: Flask Application Instance
    """
    app = Flask(
        __name__,
        instance_relative_config=True,
        static_folder="../../client/dist/static",
        template_folder="../../client/dist",
    )

    uri = f"{engine}://{user}:{password}@{host}/{database}"
    
    app.title = "BRED"

    app.config["SQLALCHEMY_DATABASE_URI"] = uri

    # Register blueprints
    # デフォルトのルート
    @app.route("/", defaults={"path": ""})
    # その他のルート
    @app.route("/<path:path>")
    def main(path):
        return render_template("index.html")

    return app
