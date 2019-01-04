import os
import pandas as pd
import numpy as np
import sqlite3
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine
from flask import Flask, jsonify, render_template
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
#################################################
# Database Setup
#################################################

engine=create_engine('sqlite:///YouTube.sqlite')
# reflect an existing database into a new model
Base = automap_base()
#
session=Session(engine)
# reflect the tables
Base.prepare(engine, reflect=True)


@app.route("/")
def index():
      
     """Return the homepage."""
     return render_template("index.html")
@app.route("/categories")
def    summary():
       query="SELECT category, monthly_earnings, subscribers, views, views/30000000 AS views2, uploads FROM summary"
       youtube_df=pd.read_sql_query(query,session.bind)
       youtube_dict =youtube_df.to_dict('list')

      
    
       return jsonify(youtube_dict)








if __name__ == "__main__":
    app.run()
