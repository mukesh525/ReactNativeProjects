import React ,{Component} from 'react';
import {
    Text,
    TouchableWithoutFeedback,
    View,
    LayoutAnimation
} from 'react-native';
import {CardSection} from './common';
import * as actions from '../action';
import {connect} from 'react-redux';


class ListItem extends Component{
    
    componentWillUpdate(){
        LayoutAnimation.spring();
    }
    
    rederDeciption=()=>{
        const{library,expanded} = this.props;
        if(expanded){
            return (
                 <CardSection>
                  <Text  style ={{flex:1}}>{library.desciption}</Text>
                  </CardSection>
            );
        }
    }



   
    render(){
     const { titleStyle } = styles;
     const { id,title } = this.props.library;
     //console.log(this.props);
     return (
         <TouchableWithoutFeedback
           onPress ={()=> this.props.selectedLibrary(id)}
           >
             <View>
                <CardSection>
                    <Text style={titleStyle}>{this.props.library.title}</Text>
                </CardSection>
              {this.rederDeciption()}
            </View>
       </TouchableWithoutFeedback>
    );
   }
}


const styles = {
    titleStyle:{
        fontSize:18,
        paddingLeft:15
    }
};

const mapStateToProps = (state,ownProps) => {
    const expanded =state.selectionLibraryId ===ownProps.library.id;
    return {expanded}
}

export default connect(mapStateToProps,actions)(ListItem);