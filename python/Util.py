import os
import numpy as np
import pandas as pd
from numpy import genfromtxt


class Util:

    @staticmethod
    def load_data_as_pdf(file_name):
        if os.path.exists(file_name):
            print("Loading File {}".format(file_name))
            # data = np.genfromtxt(file_name, delimiter=" ")
            pdf = pd.read_csv(file_name, delimiter=",")
            print(pdf.shape)
            print(pdf.head())
            return pdf

        else:
            raise Exception("File Not Found")

    @staticmethod
    def load_data_as_numpy(file_name):
        if os.path.exists(file_name):
            print("Loading File {}".format(file_name))
            data = np.genfromtxt(file_name, delimiter=",")
            print(data.shape)
            return data
        else:
            raise Exception("File Not Found")

    @staticmethod
    def extract_date_info(datestr: str):
        strs = datestr.split(" ")
        yy_mm_dd = strs[0]
        time_info = strs[1]
        date_info = yy_mm_dd.split("-")
        year = date_info[0]
        month = date_info[1]
        day = date_info[2]
        time_sub_info = time_info.split(".")
        hh_mm_ss = time_sub_info[0].split(":")
        microseconds = time_sub_info[1]
        milliseconds = str((float(microseconds) / 1000.0))
        hour = hh_mm_ss[0]
        minutes = hh_mm_ss[1]
        seconds = hh_mm_ss[2]
        info_str = year + "," + month + "," + day + "," + hour + "," \
                                                                 "" + minutes + "," + seconds + "," + \
                   milliseconds
        return info_str
