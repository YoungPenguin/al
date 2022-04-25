const wikiDistData = JSON.parse(`[{"breakdown": "faction", "metric": "bert_sentiment", "x": [-0.7405549436807632, -0.5616655796766281, -0.382776215672493, -0.20388685166835785, -0.024997487664222717, 0.15389187633991241, 0.33278124034404755, 0.5116706043481827, 0.6905599683523178, 0.8694493323564529], "y": [0.028571428571428577, 0.0, 0.0, 0.028571428571428577, 0.14285714285714288, 0.17142857142857146, 0.4000000000000001, 0.17142857142857146, 0.028571428571428577, 0.028571428571428577], "label": "Horde"}, {"breakdown": "faction", "metric": "bert_sentiment", "x": [-0.09097861698134166, -0.011222281963147777, 0.0685340530550461, 0.14829038807324, 0.22804672309143387, 0.30780305810962777, 0.38755939312782167, 0.4673157281460156, 0.5470720631642094, 0.6268283981824034], "y": [0.060606060606060615, 0.0, 0.030303030303030318, 0.1818181818181818, 0.09090909090909094, 0.15151515151515152, 0.21212121212121213, 0.12121212121212122, 0.12121212121212122, 0.030303030303030304], "label": "Alliance"}, {"breakdown": "faction", "metric": "bert_sentiment", "x": [-0.8741138905286789, -0.6768516689538955, -0.47958944737911224, -0.28232722580432895, -0.0850650042295456, 0.11219721734523769, 0.30945943892002103, 0.5067216604948044, 0.7039838820695876, 0.901246103644371], "y": [0.0234375, 0.0078125, 0.015625000000000007, 0.03125, 0.1015625, 0.2187500000000001, 0.24999999999999986, 0.14843750000000008, 0.05468750000000003, 0.14843749999999992], "label": "Neutral"}, {"breakdown": "faction", "metric": "vader_sentiment", "x": [-0.18856976851851853, -0.14345930555555558, -0.09834884259259259, -0.05323837962962963, -0.008127916666666679, 0.0369825462962963, 0.08209300925925928, 0.12720347222222222, 0.17231393518518517, 0.21742439814814812], "y": [0.05714285714285715, 0.0, 0.02857142857142856, 0.1142857142857143, 0.31428571428571433, 0.17142857142857126, 0.2285714285714286, 0.05714285714285715, 0.0, 0.028571428571428574], "label": "Horde"}, {"breakdown": "faction", "metric": "vader_sentiment", "x": [-0.17968526515151514, -0.13975579545454545, -0.09982632575757575, -0.059896856060606046, -0.019967386363636347, 0.019962083333333352, 0.05989155303030305, 0.09982102272727275, 0.13975049242424245, 0.17967996212121212], "y": [0.030303030303030304, 0.0, 0.06060606060606061, 0.09090909090909091, 0.12121212121212122, 0.1515151515151515, 0.2121212121212121, 0.24242424242424243, 0.06060606060606061, 0.03030303030303032], "label": "Alliance"}, {"breakdown": "faction", "metric": "vader_sentiment", "x": [-0.2661264861111111, -0.17507945833333333, -0.08403243055555555, 0.007014597222222224, 0.09806162500000001, 0.18910865277777777, 0.28015568055555556, 0.37120270833333335, 0.4622497361111111, 0.5532967638888888], "y": [0.031249999999999997, 0.03906250000000001, 0.21093750000000003, 0.35937499999999994, 0.19531249999999994, 0.10156250000000003, 0.039062499999999965, 0.015625000000000003, 0.0, 0.007812499999999994], "label": "Neutral"}, {"breakdown": "gender", "metric": "bert_sentiment", "x": [-0.8259238824248314, -0.633734293282032, -0.44154470413923264, -0.24935511499643326, -0.05716552585363388, 0.1350240632891655, 0.3272136524319649, 0.5194032415747643, 0.7115928307175636, 0.903782419860363], "y": [0.013333333333333332, 0.013333333333333332, 0.0, 0.03333333333333333, 0.1, 0.2, 0.35333333333333333, 0.13999999999999999, 0.04666666666666667, 0.1], "label": "Male"}, {"breakdown": "gender", "metric": "bert_sentiment", "x": [-0.8741561512152354, -0.676978451013565, -0.4798007508118948, -0.2826230506102245, -0.08544535040855417, 0.11173234979311608, 0.30891004999478633, 0.5060877501964567, 0.703265450398127, 0.9004431505997974], "y": [0.04999999999999998, 0.0, 0.0, 0.02499999999999999, 0.09999999999999996, 0.2750000000000002, 0.14999999999999994, 0.24999999999999992, 0.04999999999999998, 0.09999999999999992], "label": "Female"}, {"breakdown": "gender", "metric": "vader_sentiment", "x": [-0.1942985694444444, -0.11081237499999996, -0.027326180555555524, 0.056160013888888916, 0.13964620833333335, 0.2231324027777778, 0.30661859722222223, 0.3901047916666667, 0.47359098611111117, 0.5570771805555557], "y": [0.04, 0.12, 0.35333333333333333, 0.2733333333333333, 0.14666666666666664, 0.033333333333333326, 0.013333333333333343, 0.013333333333333326, 0.0, 0.006666666666666671], "label": "Male"}, {"breakdown": "gender", "metric": "vader_sentiment", "x": [-0.2798374444444444, -0.21621233333333334, -0.1525872222222222, -0.08896211111111112, -0.025337, 0.038288111111111106, 0.10191322222222218, 0.1655383333333333, 0.22916344444444442, 0.29278855555555555], "y": [0.025, 0.025, 0.0, 0.1, 0.2749999999999999, 0.2000000000000001, 0.2000000000000001, 0.07499999999999997, 0.07499999999999997, 0.02499999999999999], "label": "Female"}, {"breakdown": "status", "metric": "bert_sentiment", "x": [-0.7385378986597061, -0.5556144446134568, -0.3726909905672074, -0.189767536520958, -0.006844082474708579, 0.17607937157154074, 0.35900282561779007, 0.5419262796640395, 0.7248497337102889, 0.9077731877565384], "y": [0.007874015748031496, 0.023622047244094505, 0.007874015748031501, 0.023622047244094488, 0.13385826771653545, 0.21259842519685065, 0.30708661417322836, 0.15748031496062992, 0.031496062992125984, 0.09448818897637795], "label": "Alive"}, {"breakdown": "status", "metric": "bert_sentiment", "x": [-0.8741138905286789, -0.6768516689538955, -0.47958944737911224, -0.28232722580432895, -0.0850650042295456, 0.11219721734523769, 0.30945943892002103, 0.5067216604948044, 0.7039838820695876, 0.901246103644371], "y": [0.04411764705882353, 0.0, 0.0, 0.04411764705882353, 0.11764705882352944, 0.23529411764705896, 0.32352941176470573, 0.04411764705882356, 0.07352941176470594, 0.11764705882352937], "label": "Deceased"}, {"breakdown": "status", "metric": "vader_sentiment", "x": [-0.24308898611111115, -0.15446695833333335, -0.06584493055555556, 0.022777097222222237, 0.11139912500000002, 0.20002115277777782, 0.2886431805555556, 0.3772652083333334, 0.46588723611111127, 0.554509263888889], "y": [0.03149606299212599, 0.03937007874015747, 0.18110236220472437, 0.4015748031496063, 0.2913385826771654, 0.03149606299212597, 0.015748031496063006, 0.0, 0.0, 0.007874015748031513], "label": "Alive"}, {"breakdown": "status", "metric": "vader_sentiment", "x": [-0.2776330555555555, -0.20959916666666667, -0.14156527777777778, -0.07353138888888891, -0.005497500000000016, 0.06253638888888885, 0.13057027777777772, 0.1986041666666666, 0.2666380555555555, 0.33467194444444437], "y": [0.014705882352941176, 0.014705882352941181, 0.044117647058823546, 0.29411764705882354, 0.24999999999999997, 0.10294117647058831, 0.11764705882352941, 0.07352941176470588, 0.02941176470588238, 0.05882352941176461], "label": "Deceased"}, {"breakdown": "community", "metric": "bert_sentiment", "x": [-0.10227869889315436, 0.013688862323760993, 0.12965642354067636, 0.2456239847575917, 0.36159154597450704, 0.47755910719142236, 0.5935266684083378, 0.7094942296252532, 0.8254617908421685, 0.9414293520590838], "y": [0.07142857142857142, 0.14285714285714285, 0.14285714285714285, 0.24999999999999994, 0.14285714285714282, 0.10714285714285723, 0.03571428571428566, 0.07142857142857147, 0.0, 0.03571428571428573], "label": "Khadgar, Illidan Stormrage, Lor'themar Theron"}, {"breakdown": "community", "metric": "bert_sentiment", "x": [-0.8741460055112839, -0.6769480139017106, -0.4797500222921372, -0.28255203068256385, -0.08535403907299044, 0.11184395253658286, 0.30904194414615616, 0.5062399357557296, 0.703437927365303, 0.9006359189748764], "y": [0.0476190476190476, 0.0, 0.04761904761904762, 0.0476190476190476, 0.0952380952380952, 0.2380952380952383, 0.0952380952380952, 0.14285714285714282, 0.0476190476190476, 0.238095238095238], "label": "Deathwing, Sargeras, Yogg-Saron"}, {"breakdown": "community", "metric": "bert_sentiment", "x": [-0.8330028519034386, -0.6549712017178535, -0.47693955153226847, -0.29890790134668344, -0.12087625116109846, 0.05715539902448663, 0.23518704921007172, 0.4132186993956567, 0.5912503495812417, 0.7692819997668267], "y": [0.02173913043478261, 0.021739130434782598, 0.0, 0.0, 0.13043478260869568, 0.19565217391304326, 0.21739130434782614, 0.3043478260869566, 0.08695652173913045, 0.02173913043478261], "label": "Sylvanas Windrunner, Lich King, Varian Wrynn"}, {"breakdown": "community", "metric": "bert_sentiment", "x": [-0.26352214043339095, -0.13245661730567615, -0.0013910941779613495, 0.12967442894975345, 0.26073995207746825, 0.39180547520518305, 0.5228709983328979, 0.6539365214606127, 0.7850020445883275, 0.9160675677160423], "y": [0.031249999999999997, 0.031249999999999997, 0.06249999999999999, 0.09374999999999999, 0.09374999999999999, 0.31249999999999994, 0.1874999999999999, 0.03125000000000002, 0.0, 0.1562500000000001], "label": "Tyrande Whisperwind, Malfurion Stormrage, Alexstrasza"}, {"breakdown": "community", "metric": "bert_sentiment", "x": [-0.8422360241413116, -0.6526433885097505, -0.4630507528781891, -0.2734581172466278, -0.08386548161506652, 0.1057271540164948, 0.29531978964805605, 0.4849124252796173, 0.6745050609111787, 0.8640976965427399], "y": [0.05263157894736842, 0.0, 0.0, 0.0, 0.0, 0.2631578947368419, 0.36842105263157915, 0.05263157894736838, 0.15789473684210517, 0.10526315789473689], "label": "Thrall, Ner'zhul, Orgrim Doomhammer"}, {"breakdown": "community", "metric": "bert_sentiment", "x": [-0.011394481609265008, 0.02022829428315163, 0.051851070175568274, 0.08347384606798491, 0.11509662196040155, 0.14671939785281818, 0.17834217374523484, 0.20996494963765147, 0.2415877255300681, 0.2732105014224847], "y": [0.49999999999999994, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.5000000000000001], "label": "Anzu, Terokk, Talon King Ikiss"}, {"breakdown": "community", "metric": "bert_sentiment", "x": [-0.7385057836771012, -0.5555180996656418, -0.37253041565418243, -0.18954273164272312, -0.006555047631263744, 0.17643263638019557, 0.35942032039165495, 0.5424080044031143, 0.7253956884145736, 0.908383372426033], "y": [0.02083333333333334, 0.020833333333333343, 0.020833333333333343, 0.04166666666666668, 0.14583333333333337, 0.1666666666666668, 0.33333333333333315, 0.10416666666666675, 0.02083333333333335, 0.12499999999999996], "label": "Jaina Proudmoore, Anduin Wrynn, Garrosh Hellscream"}, {"breakdown": "community", "metric": "vader_sentiment", "x": [-0.07922494047619047, -0.05678863095238096, -0.03435232142857143, -0.011916011904761915, 0.01052029761904761, 0.03295660714285713, 0.05539291666666665, 0.07782922619047618, 0.10026553571428569, 0.12270184523809521], "y": [0.10714285714285714, 0.0, 0.14285714285714288, 0.21428571428571427, 0.14285714285714285, 0.0, 0.035714285714285685, 0.2500000000000001, 0.03571428571428573, 0.07142857142857137], "label": "Khadgar, Illidan Stormrage, Lor'themar Theron"}, {"breakdown": "community", "metric": "vader_sentiment", "x": [-0.1380732718253968, -0.06050552976190475, 0.017062212301587318, 0.09462995436507939, 0.17219769642857144, 0.2497654384920635, 0.3273331805555556, 0.4049009226190477, 0.48246866468253974, 0.5600364067460317], "y": [0.09523809523809525, 0.14285714285714288, 0.380952380952381, 0.1904761904761905, 0.04761904761904764, 0.04761904761904762, 0.04761904761904757, 0.0, 0.0, 0.04761904761904764], "label": "Deathwing, Sargeras, Yogg-Saron"}, {"breakdown": "community", "metric": "vader_sentiment", "x": [-0.2808845833333333, -0.21935375, -0.15782291666666665, -0.09629208333333332, -0.03476124999999998, 0.026769583333333347, 0.08830041666666669, 0.14983125000000003, 0.21136208333333337, 0.2728929166666667], "y": [0.02173913043478261, 0.06521739130434778, 0.0, 0.19565217391304346, 0.19565217391304346, 0.23913043478260876, 0.1521739130434782, 0.1086956521739131, 0.0, 0.021739130434782636], "label": "Sylvanas Windrunner, Lich King, Varian Wrynn"}, {"breakdown": "community", "metric": "vader_sentiment", "x": [-0.10385, -0.055549999999999995, -0.0072499999999999995, 0.04105, 0.08935000000000001, 0.13765, 0.18595, 0.23425, 0.28255, 0.33085000000000003], "y": [0.0625, 0.18750000000000006, 0.21875000000000003, 0.0625, 0.1875, 0.09375000000000004, 0.125, 0.0, 0.03125, 0.03125], "label": "Tyrande Whisperwind, Malfurion Stormrage, Alexstrasza"}, {"breakdown": "community", "metric": "vader_sentiment", "x": [-0.2177645833333333, -0.18121041666666665, -0.14465625, -0.10810208333333332, -0.07154791666666666, -0.034993750000000004, 0.0015604166666666475, 0.03811458333333331, 0.07466874999999998, 0.11122291666666664], "y": [0.052631578947368425, 0.05263157894736847, 0.0, 0.0, 0.2105263157894737, 0.10526315789473693, 0.2105263157894737, 0.15789473684210525, 0.15789473684210525, 0.052631578947368425], "label": "Thrall, Ner'zhul, Orgrim Doomhammer"}, {"breakdown": "community", "metric": "vader_sentiment", "x": [-0.14349483506944444, -0.12790672743055556, -0.11231861979166667, -0.09673051215277778, -0.0811424045138889, -0.06555429687500001, -0.04996618923611113, -0.03437808159722224, -0.01878997395833336, -0.0032018663194444616], "y": [0.5000000000000007, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.49999999999999933], "label": "Anzu, Terokk, Talon King Ikiss"}, {"breakdown": "community", "metric": "vader_sentiment", "x": [-0.2545955555555556, -0.1889866666666667, -0.1233777777777778, -0.0577688888888889, 0.007839999999999986, 0.0734488888888889, 0.1390577777777778, 0.2046666666666667, 0.2702755555555556, 0.3358844444444445], "y": [0.02083333333333334, 0.041666666666666664, 0.0, 0.14583333333333337, 0.2708333333333334, 0.2708333333333332, 0.12500000000000006, 0.04166666666666668, 0.04166666666666664, 0.04166666666666671], "label": "Jaina Proudmoore, Anduin Wrynn, Garrosh Hellscream"}]`)