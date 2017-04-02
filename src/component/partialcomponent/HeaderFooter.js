import React, { Component } from 'react';
import ApplcationBar from '../generalcomponent/applicationbar';
import withRouter    from 'react-router/lib/withRouter'
export default withRouter(class HeaderFooter extends Component {

    render() {

        return (
            <div>
                <ApplcationBar />
                      <div>
                   {this.props.children}
                </div>
            </div>
        );
    }
})

