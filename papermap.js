var dirc = "http://52.37.179.170/wp-content/themes/evolve/asset/map";
var default_title = 'Learn about BD2K Centers';
var sel_title = default_title;
var sel_dirc = "/map2.jpg";
var sel_content = 'Mouse over a center to display info. Click to select.</br></br>A list of all BD2K Centers is available <a href="/index.php/bd2k-centers">here</a>.';

var raster = new Raster('my_map');
raster.scale(0.55)
raster.position = view.center;

function centerHTMLDescription(title, full_description, location, link, link2) {
	return '<a href="' + link + '">' + full_description + '</a><div>' + location + '</div><div>Explore ' + title + ' resources <a href="/index.php/' + link2 + '/">here</a>.</div>';
}

var pic_sure_title = 'PIC-SURE';
var pic_sure_link = 'http://pic-sure.org';
var pic_sure_description = centerHTMLDescription(pic_sure_title,'Patient-Centered Information Commons: Standardized Unification of Research Elements', 'Harvard University Medical School', pic_sure_link, 'picsure');

var lincs_dcic_title = 'LINCS-DCIC';
var lincs_dcic_link = 'http://lincs-dcic.org';
var lincs_dcic_description = centerHTMLDescription(lincs_dcic_title, 'LINCS-BD2K Perturbation Data Coordination and Integration Center', 'Icahn School of Medicine at Mount Sinai', lincs_dcic_link, 'lincs-dcic');

var lincs_transcriptomics_title = 'LINCS Transcriptomics';
var lincs_transcriptomics_link = 'http://www.lincsproject.org/centers/data-and-signature-generating-centers/broad-trx/';
var lincs_transcriptomics_description = centerHTMLDescription(lincs_transcriptomics_title,'Broad Institute LINCS Center for Transcriptomics', 'Broad Institute', lincs_transcriptomics_link, 'lincs-tg');

var heart_bd2k_title = 'HeartBD2K';
var heart_bd2k_link = 'http://heartbd2k.org';
var heart_bd2k_description = centerHTMLDescription(heart_bd2k_title, 'A Community Effort to Translate Protein Data to Knowledge: An Integrated Platform', 'University of California, Los Angeles', heart_bd2k_link, 'heartbd2k');

var md2k_title = 'MD2K';
var md2k_link = 'http://md2k.org';
var md2k_link_internal = '/index.php/md2k/';
var md2k_description = centerHTMLDescription(md2k_title, 'Center of Excellence for Mobile Sensor Data-to-Knowledge', 'University of Memphis', md2k_link, 'md2k');

var cpcp_title = 'CPCP';
var cpcp_link = 'http://cpcp.wisc.edu';
var cpcp_description = centerHTMLDescription(cpcp_title, 'Center for Predictive Computational Phenotyping', 'University of Wisconsin, Madison', cpcp_link, 'cpcp');

var knoweng_title = 'KnowEng';
var knoweng_link = 'http://knoweng.org';
var knoweng_description = centerHTMLDescription(knoweng_title, 'A Scalable Knowledge Engine for Large-Scale Genomic Data', 'University of Illinois, Urbana-Champaign', knoweng_link, 'knoweng');

var ccd_title = 'CCD';
var ccd_link = 'http://www.ccd.pitt.edu/';
var ccd_description = centerHTMLDescription(ccd_title, 'Center for Causal Modeling and Discovery of Biomedical Knowledge from Big Data', 'University of Pittsburgh', ccd_link, 'ccd');

var bdtg_title = 'Translational Genomics';
var bdtg_link = 'https://genomics.soe.ucsc.edu/bd2k';
var bdtg_description = centerHTMLDescription(bdtg_title, 'Center for Big Data in Translational Genomics', 'University of California, Santa Cruz', bdtg_link, 'bdtg');

var mobilize_title = 'Mobilize Center';
var mobilize_link = 'http://mobilize.stanford.edu';
var mobilize_description = centerHTMLDescription(mobilize_title, 'National Center for Mobility Data Integration to Insight', 'Stanford University', mobilize_link, 'mobilize');

var cedar_title = 'CEDAR';
var cedar_link = 'http://metadatacenter.org';
var cedar_description = centerHTMLDescription(cedar_title, 'Center for Expanded Data Annotation and Retrieval', 'Stanford University', cedar_link, 'cedar');

var enigma_title = 'ENIGMA';
var enigma_link = 'http://enigma.ini.usc.edu';
var enigma_description = centerHTMLDescription(enigma_title, 'ENIGMA Center for Worldwide Medicine, Imaging, and Genomics', 'University of Southern California', enigma_link, 'enigma');

var bdds_title = 'BDDS';
var bdds_link = 'http://bd2k.ini.usc.edu';
var bdds_description = centerHTMLDescription(bdds_title, 'Big Data for Discovery Science Center', 'University of Southern California', bdds_link, 'bdds');

//subgroup
var subtest_title = 'SUBTEST';
var subtest_link = 'http://bd2k.ini.usc.edu';
var subtest_description = centerHTMLDescription(bdds_title, 'Big Data for Discovery Science Center', 'University of Southern California', bdds_link, 'bdds');
//end subgroup

var dotFillColor = 'red'
var subdotFillColor = 'blue'
var pic_sure_dot = new Path.Circle(new Point(530, 88), 10);
pic_sure_dot.strokeColor = dotFillColor;
pic_sure_dot.fillColor = dotFillColor;

var lincs_dcic_dot = new Path.Circle(new Point(490, 99), 10);
lincs_dcic_dot.strokeColor = dotFillColor;
lincs_dcic_dot.fillColor = dotFillColor;

var lincs_transcriptomics_dot = new Path.Circle(new Point(511, 96), 10);
lincs_transcriptomics_dot.strokeColor = dotFillColor;
lincs_transcriptomics_dot.fillColor = dotFillColor;

var heart_bd2k_dot = new Path.Circle(new Point(39, 202), 10);
heart_bd2k_dot.strokeColor = dotFillColor;
heart_bd2k_dot.fillColor = dotFillColor;

var md2k_dot = new Path.Circle(new Point(342, 215), 10);
md2k_dot.strokeColor = dotFillColor;
md2k_dot.fillColor = dotFillColor;

var cpcp_dot = new Path.Circle(new Point(345, 105), 10);
cpcp_dot.strokeColor = dotFillColor;
cpcp_dot.fillColor = dotFillColor;

var knoweng_dot = new Path.Circle(new Point(352, 142), 10);
knoweng_dot.strokeColor = dotFillColor;
knoweng_dot.fillColor = dotFillColor;

var ccd_dot = new Path.Circle(new Point(433, 136), 10);
ccd_dot.strokeColor = dotFillColor;
ccd_dot.fillColor = dotFillColor;

var bdtg_dot = new Path.Circle(new Point(36, 155), 10);
bdtg_dot.strokeColor = dotFillColor;
bdtg_dot.fillColor = dotFillColor;

var mobilize_dot = new Path.Circle(new Point(43, 135), 10);
mobilize_dot.strokeColor = dotFillColor;
mobilize_dot.fillColor = dotFillColor;

var cedar_dot = new Path.Circle(new Point(23, 132), 10);
cedar_dot.strokeColor = dotFillColor;
cedar_dot.fillColor = dotFillColor;

var enigma_dot = new Path.Circle(new Point(79, 218), 10);
enigma_dot.strokeColor = dotFillColor;
enigma_dot.fillColor = dotFillColor;

var bdds_dot = new Path.Circle(new Point(58, 212), 10);
bdds_dot.strokeColor = dotFillColor;
bdds_dot.fillColor = dotFillColor;


var lineColor = 'black';
var subdotList = [];
var sublineList = [];
function linkSubMain(sub, main, line) {
	sub.strokeColor = subdotFillColor;
	sub.fillColor = subdotFillColor;
	line.strokeColor = lineColor;
	line.strokeWidth = 3;
	line.add(sub.position);
	line.add(main.position);
	sub.visible = false;
	subdotList.push(sub);
	line.visible = false;
	sublineList.push(line);
}
function cleanSub() {
	for (var i = 0; i < subdotList.length; i++) {
    	subdotList[i].visible = false;
    	subdotList[i].fillColor = subdotFillColor;
    	subdotList[i].strokeColor = subdotFillColor;
	}
	for (var i = 0; i < sublineList.length; i++) {
    	sublineList[i].visible = false;
	}
}

//resource indexing dots
var resourceIndexing = [];
resourceIndexing.push(new Path.Circle(new Point(79, 230), 6));//biocaddie, san diego
resourceIndexing.push(new Path.Circle(new Point(483, 136), 6));//Cardiovascular Research Grid, john hopkins, baltimore
resourceIndexing.push(new Path.Circle(new Point(500, 110), 6));//Computational tools for the analysis of high-throughput immunoglobulin sequencing, yale, new haven ct
resourceIndexing.push(new Path.Circle(new Point(500, 93), 6));//Discovering and Applying Knowledge in Clinical Databases, columbia
resourceIndexing.push(new Path.Circle(new Point(200, 142), 6));//fMRI-based Biomarkers for Multiple Components of Pain, denver
resourceIndexing.push(new Path.Circle(new Point(443, 205), 6));//Generation of a centralized and integrated resource for exposure data, North Carolina State University – Raleigh
resourceIndexing.push(new Path.Circle(new Point(300, 280), 6));//A Hub for the Nuclear Receptor Signaling Atlas, baylor, houston
resourceIndexing.push(new Path.Circle(new Point(323, 90), 6));//Natural language processing for clinical and translational research, mayo clinic, rochester
resourceIndexing.push(new Path.Circle(new Point(490, 121), 6));//Using Biomedical Knowledge to Identify Plausible Signals for Pharmacovigilance, drexel, philly

//targeted software development dots
var targetedSoftwareDevelopment = [];
targetedSoftwareDevelopment.push(new Path.Circle(new Point(300, 121), 6));//omaha
targetedSoftwareDevelopment.push(new Path.Circle(new Point(52, 135), 6));//University of California - Lawrence Berkeley Laboratory
targetedSoftwareDevelopment.push(new Path.Circle(new Point(150, 230), 6));//university of arizona
targetedSoftwareDevelopment.push(new Path.Circle(new Point(428, 131), 6));//cleveland
targetedSoftwareDevelopment.push(new Path.Circle(new Point(375, 156), 6));//Indiana University Bloomington
targetedSoftwareDevelopment.push(new Path.Circle(new Point(440, 202), 6));//duke university
targetedSoftwareDevelopment.push(new Path.Circle(new Point(281, 265), 6));//dallas


if(true){
resourceIndexing.forEach(function(dot) {
    dot.visible = true;
	dot.strokeColor = subdotFillColor;
	dot.fillColor = subdotFillColor;
	dot.onMouseEnter = function(event) {
		showCenter('Resource Indexing Awards', "/map2.jpg", 'More information on Resource Indexing Awards is available <a href="https://datascience.nih.gov/bd2k/funded-programs/resource-indexing">here</a>.', 1)
	}
	dot.onClick = function(event) {
		window.location.href = "https://datascience.nih.gov/bd2k/funded-programs/resource-indexing";
	}
	subdotList.push(dot);
});
targetedSoftwareDevelopment.forEach(function(dot) {
    dot.visible = true;
	dot.strokeColor = subdotFillColor;
	dot.fillColor = subdotFillColor;
	dot.onMouseEnter = function(event) {
		showCenter('Targeted Software Development Awards', "/map2.jpg", 'More information on Targeted Software Development Awards is available <a href="https://datascience.nih.gov/bd2k/funded-programs/software">here</a>.', 1)
	}
	dot.onClick = function(event) {
		window.location.href = "https://datascience.nih.gov/bd2k/funded-programs/software";
	}
	subdotList.push(dot);
});
}


//subgroup
//for this example we link it to bdtg
var subtest = new Path.Circle(new Point(300, 200), 8);
var subtest_line = new Path();
linkSubMain(subtest, bdtg_dot, subtest_line);

var subtest2 = new Path.Circle(new Point(200, 100), 8);
var subtest2_line = new Path();
linkSubMain(subtest2, bdtg_dot, subtest2_line);
//end of subgroup


var dotSelectedColor = '#cc0000';
var subdotSelectedColor = '#0000cc';
var currentDot = null;
var currentSubDot = null;
var arr = [];
for (var i = 0; i < 20; i++) {
	arr[i] = 0;
}
var waittime = 50;

function showCenter(center, imgSrc, centerDescription, index) {
	$("#map_title").html(center);
    if (arr[index] == 0) {
        $("#map_img").hide();
        $("#map_load").show();
    }
    $("#map_img").attr("src", dirc+imgSrc);
    if (arr[index] == 0) {
        setTimeout(function(){
            $("#map_load").hide();
            $("#map_img").show();
            arr[index] = 1;
        }, waittime);
    }
    $("#map_img").css("box-shadow","0 1px 5px rgba(0,0,0,.3)");
	$("#map_content").html(centerDescription);
}
function highlightMainDot(dot, center, imgSrc, centerDescription) {
	//cleanSub();
	if (currentDot != null) {
		currentDot.fillColor = dotFillColor;
		currentDot.strokeColor = dotFillColor;
	}
	dot.fillColor = dotSelectedColor;
	dot.strokeColor = dotSelectedColor;
	currentDot = dot;
	sel_title = center;
	sel_dirc = imgSrc;
	sel_content = centerDescription;
}
function highlightSubDot(dot, center, imgSrc, centerDescription) {
	if (currentSubDot != null) {
		currentSubDot.fillColor = subdotFillColor;
		currentSubDot.strokeColor = subdotFillColor;
	}
	dot.fillColor = subdotSelectedColor;
	dot.strokeColor = subdotSelectedColor;
	currentSubDot = dot;
	sel_title = center;
	sel_dirc = imgSrc;
	sel_content = centerDescription;
}

pic_sure_dot.onMouseEnter = function(event) {
	showCenter(pic_sure_title, "/map_13.jpg", pic_sure_description, 0)
}
pic_sure_dot.onClick = function(event) {
	highlightMainDot(pic_sure_dot, pic_sure_title, "/map_13.jpg", pic_sure_description);
}
lincs_dcic_dot.onMouseEnter = function(event) {
	showCenter(lincs_dcic_title, "/map_1.jpg", lincs_dcic_description, 1)
}
lincs_dcic_dot.onClick = function(event) {
	highlightMainDot(lincs_dcic_dot, lincs_dcic_title, "/map_1.jpg", lincs_dcic_description);
}
lincs_transcriptomics_dot.onMouseEnter = function(event) {
	showCenter(lincs_transcriptomics_title, "/map_2.jpg", lincs_transcriptomics_description, 2)
}
lincs_transcriptomics_dot.onClick = function(event) {
	highlightMainDot(lincs_transcriptomics_dot, lincs_transcriptomics_title, "/map_2.jpg", lincs_transcriptomics_description);
}
heart_bd2k_dot.onMouseEnter = function(event) {
	showCenter(heart_bd2k_title, "/map_9.jpg", heart_bd2k_description, 3)
}
heart_bd2k_dot.onClick = function(event) {
	highlightMainDot(heart_bd2k_dot, heart_bd2k_title, "/map_9.jpg", heart_bd2k_description);
}
bdds_dot.onMouseEnter = function(event) {
	showCenter(bdds_title, "/map_3.jpg", bdds_description, 4)
}
bdds_dot.onClick = function(event) {
	highlightMainDot(bdds_dot, bdds_title, "/map_3.jpg", bdds_description);
}
enigma_dot.onMouseEnter = function(event) {
	showCenter(enigma_title, "/map_10.jpg", enigma_description, 5)
}
enigma_dot.onClick = function(event) {
	highlightMainDot(enigma_dot, enigma_title, "/map_10.jpg", enigma_description);
}
cedar_dot.onMouseEnter = function(event) {
	showCenter(cedar_title, "/map_6.jpg", cedar_description, 6)
}
cedar_dot.onClick = function(event) {
	highlightMainDot(cedar_dot, cedar_title, "/map_6.jpg", cedar_description);
}
mobilize_dot.onMouseEnter = function(event) {
	showCenter(mobilize_title, "/map_12.jpg", mobilize_description, 7)
}
mobilize_dot.onClick = function(event) {
	highlightMainDot(mobilize_dot, mobilize_title, "/map_12.jpg", mobilize_description);
}
bdtg_dot.onMouseEnter = function(event) {
	showCenter(bdtg_title, "/map_4.jpg", bdtg_description, 8)
}
bdtg_dot.onClick = function(event) {
	highlightMainDot(bdtg_dot, bdtg_title, "/map_4.jpg", bdtg_description);
	//subgroup
	if (false) {
		subtest.visible = true;
		subtest_line.visible = true;

		subtest2.visible = true;
		subtest2_line.visible = true;
	}
	//end
}
ccd_dot.onMouseEnter = function(event) {
	showCenter(ccd_title, "/map_5.jpg", ccd_description, 9)
}
ccd_dot.onClick = function(event) {
	highlightMainDot(ccd_dot, ccd_title, "/map_5.jpg", ccd_description);
}
knoweng_dot.onMouseEnter = function(event) {
	showCenter(knoweng_title, "/map_11.jpg", knoweng_description, 10)
}
knoweng_dot.onClick = function(event) {
	highlightMainDot(knoweng_dot, knoweng_title, "/map_11.jpg", knoweng_description);
}
cpcp_dot.onMouseEnter = function(event) {
	showCenter(cpcp_title, "/map_7.jpg", cpcp_description, 11)
}
cpcp_dot.onClick = function(event) {
	highlightMainDot(cpcp_dot, cpcp_title, "/map_7.jpg", cpcp_description);
}
md2k_dot.onMouseEnter = function(event) {
	showCenter(md2k_title, "/map_8.jpg", md2k_description, 12)
}
md2k_dot.onClick = function(event) {
	highlightMainDot(md2k_dot, md2k_title, "/map_8.jpg", md2k_description);
}

//subgroup
subtest.onMouseEnter = function(event) {
	showCenter(subtest_title, "/map_8.jpg", subtest_description, 13)
}
subtest.onClick = function(event) {
	highlightSubDot(subtest, subtest_title, "/map_8.jpg", subtest_description, true);
}
subtest2.onMouseEnter = function(event) {
	showCenter(subtest_title, "/map_7.jpg", subtest_description, 14)
}
subtest2.onClick = function(event) {
	highlightSubDot(subtest2, subtest_title, "/map_7.jpg", subtest_description, true);
}
//end subgroup

raster.onMouseEnter = function(event) {
	$("#map_title").html(sel_title);
    $("#map_img").attr("src", dirc+sel_dirc);
    $("#map_img").css("box-shadow","0 1px 5px rgba(0,0,0,.3)");
    $("#map_content").html(sel_content);
}
