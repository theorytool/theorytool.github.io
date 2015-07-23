function createPage() {
  
  function Interp(formName,tag,isCounter) {
    this.tag = tag;
    this.formName = formName;
  } 
  
  window.spikesBad = new Interp("spikes_bad","",false);
  window.spikesGood = new Interp("spikes_good","",true);
  window.nbiBad = new Interp("nbi_bad","",false);
  window.nbiGood = new Interp("nbi_good","",true);
  window.truthtestBad = new Interp("truthtest_bad","",false);
  window.truthtestGood = new Interp("truthtest_good","",true);
  window.rulesGood = new Interp("rules_good","Debaters must obey tournament rules.",false);
  window.rulesBad = new Interp("rules_bad","",true);
  window.kBad = new Interp();
  window.kGood = new Interp();
  window.conditionalityBad = new Interp();
  window.conditionalityGood = new Interp();
  window.cpBad = new Interp();
  window.cpGood = new Interp();
  window.picBad = new Interp();
  window.picGood = new Interp();
  window.multiplecpBad = new Interp();
  window.multiplecpGood = new Interp();
  window.planBad = new Interp();
  window.planGood = new Interp();
  window.cpGood = new Interp();
  window.kNeedsAlt = new Interp();
  window.aprioriBad = new Interp();
  window.aprioriGood = new Interp();
  window.negfiatBad = new Interp();
  window.negfiatGood = new Interp();
  window.solvencyNecessary = new Interp();
  window.solvencyUnnecessary = new Interp();
  window.speedBad = new Interp();
  window.speedGood = new Interp();
  window.vagueBad = new Interp();
  window.vagueGood = new Interp();
  
  window.interpArray = [window.spikesBad,window.spikesGood,window.nbiBad,window.nbiGood,window.truthtestBad,window.truthtestGood,window.rulesGood,window.rulesBad,window.kBad,window.kGood,window.conditionalityBad,window.conditionalityGood,window.cpBad,window.cpGood,window.picBad,window.picGood,window.multiplecpBad,window.multiplecpGood,window.planBad,window.planGood,window.kNeedsAlt,window.aprioriBad,window.aprioriGood,window.negfiatBad,window.negfiatGood,window.solvencyNecessary,window.solvencyUnnecessary,window.speedBad,window.speedGood,window.vagueBad,window.vagueGood];
  
  function Voter(fullWarrant,shortWarrant,outweighs) {
    this.fullWarrant = fullWarrant;
    this.shortWarrant = shortWarrant;
    this.outweighs = outweighs;
  }
  
  window.fairness = new Voter("aasdf","Fairness is a voter because asdasas","afafaf");
  window.education = new Voter ("aasdf","Education is a voter because asdasas","afafaf");
  
  window.voterArray = [window.fairness,window.education];
    
  function Standard (formName,tag,edulink,fairlink,spikesBad,spikesGood,nbiBad,nbiGood,truthtestBad,truthtestGood,rulesGood,rulesBad,kBad,kGood,conditionalityBad,conditionalityGood,cpBad,cpGood,picBad,picGood,multiplecpBad,multiplecpGood,planBad,planGood,kNeedsAlt,aprioriBad,aprioriGood,negfiatBad,negfiatGood,solvencyNecessary,solvencyUnnecessary,speedBad,speedGood,vagueBad,vagueGood) {
    this.formName = formName;
    this.tag = tag;
    this.edulink = edulink;
    this.fairlink = fairlink;
    this.spikesBad = spikesBad;
    this.spikesGood = spikesGood;
    this.nbiBad = nbiBad;
    this.nbiGood = nbiGood;
    this.truthtestBad = truthtestBad;
    this.truthtestGood = truthtestGood;
    this.rulesGood = rulesGood;
    this.rulesBad = rulesBad;
    this.kBad = kBad;
    this.kGood = kGood;
    this.conditionalityBad = conditionalityBad;
    this.conditionalityGood = conditionalityGood;
    this.cpBad = cpBad;
    this.cpGood = cpGood;
    this.picBad = picBad;
    this.picGood = picGood;
    this.multiplecpBad = multiplecpBad;
    this.multiplecpGood = multiplecpGood;
    this.planBad = planBad;
    this.planGood = planGood;
    this.kNeedsAlt = kNeedsAlt;
    this.aprioriBad = aprioriBad;
    this.aprioriGood = aprioriGood;
    this.negfiatBad = negfiatBad;
    this.negfiatGood = negfiatGood;
    this.solvencyNecessary = solvencyNecessary;
    this.solvencyUnnecessary = solvencyUnnecessary;
    this.speedBad = speedBad;
    this.speedGood = speedGood;
    this.vagueBad = vagueBad;
    this.vagueGood = vagueGood;
  }
  
  window.stratSkew = new Standard("strat_skew","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","");
  window.groundSkew = new Standard("ground_skew","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","");
  window.predictability = new Standard("predictability","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","");
  window.advocacyShift = new Standard("advocacy_shift","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","");
  window.policyEducation = new Standard("policy_education","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","");
  window.moralEducation = new Standard("moral_education","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","");
  window.rules = new Standard("rule_consistency","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","");
  
  window.standardArray = [window.stratSkew,window.groundSkew,window.predictability,window.advocacyShift,window.policyEducation,window.moralEducation,window.rules];

  function Underview(formName,text) {
    this.formName = formName;
    this.text = text;
  }
  
  window.reasonability = new Underview("reasonability","Ignore these competing interps and use reasonability because 1. It encourages us to be persuasive rather than just trying to overwhelm eachother on the flow 2. Competing interps encourages theory as an abusive strategy rather than for actually checking abuse 3. Judge intervention is inevitable because you will have to decide who better defended their interpretation and responded to their opponents. Reasonability just prevents stupid obviously untue theory. 4. Reasonability better develops community norms over time. Once some theory is accepted by everybody to be valid or invalid, judges can enforce it accordingly. LD will never progress as an activity if debaters can keep winning theory that everyone agrees is abusive or if debaters can keep running abusive positions as long as they can win their counter interp on the flow.");
  window.competingInterps = new Underview("competing_interps","");
  window.dropArg = new Underview("drop_the_arg","");
  window.dropDebater = new Underview("drop_the_debater","");
  window.errAff = new Underview("err_aff","");
  window.errNeg = new Underview("err_neg","");
  window.rviGood = new Underview("rvi_good","");
  window.rviBad = new Underview("rvi_bad");
  
  window.underviewArray = [window.reasonability,window.competingInterps,window.dropArg,window.dropDebater,window.errAff,window.errNeg,window.rviGood,window.rviBad];
  
  //done creating classes+objects+arrays, now to fill out form//
  
  for (i=0; i < window.underviewArray.length; i++) {
 document.getElementById("underviewZone").innerHTML +=
      "<label of = \'" + window.underviewArray[i].formName  + "\'>" + window.underviewArray[i].formName + "</label>" + "<input type=\'checkbox\' name=\' " + window.underviewArray[i].formName + "\'> <br>";
  }
  
  for (i=0; i<5; i++) {
    
    var displayID = "";
    
    if (i === 0) {displayID = "visible";}
    else {displayID = "invisible";}
      document.getElementById("standardList").innerHTML+= "<li id = 'standardEntry" + i + "' class = '" + displayID + "'> <select onchange = 'standardChange(this.id,this.selected);' id='standardSelect" + i + "'> <option value='none' selected>none</option> </select> </li>";
     
    
      for (j=0; j < window.standardArray.length; j++) {
        document.getElementById("standardSelect" + i).innerHTML+= "<span name='" + window.standardArray[j].formName + "Span'> <option value = '" + window.standardArray[j].formName + "'>" + window.standardArray[j].formName + "</option> </span>";
      } //done filling out standardSelect//
      
      document.getElementById("standardEntry" + i).innerHTML+= "<br> <input id='manualInterpLink" + i + "' type='text' />";
       
    
  } //done creating standard entries 0-4//
  
  for (i=0; i < window.interpArray.length; i++) {
    
  }
 

  
}

//end of createPage, now for form functions//

function standardChange(id,value) {
  if (value !== "none") {
    var nextEntry = Number(id.slice(-1))+1;
    document.getElementById("standardEntry" + nextEntry).className = "visible";
  }
  else{}
}

function voterChange(value) {
  if (value === "both") {
 document.getElementById("outweighZone").className = "invisible";
    for (j=0; j<5; j++) //cycling 5 standard entries// 
    {
      for (i=0; i< window.standardArray.length; i++) //cycling all standards in array, should be same order as standards in list//
      {
        document.getElementById("standardSelect" + j).
      }
    }
  }
  else {
    var link = "";
    switch (value) {
      case "fairness":
        link = "fairlink";
        break;
      case "education":
        link = "edulink";
        break;
    }
    
    //for loop through standard entries, only show options with link === true //
    
  } //end of not both//
} //end of voterChange//



function createShell(){
  
}


   
