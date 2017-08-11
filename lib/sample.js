/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Transaction to Issue Points
 * @param {org.bloyal.loyalty.issuePoints} Issuetxn
 * @transaction
 */

  function issuePoints(Issuetxn) {


      return getAssetRegistry('org.bloyal.loyalty.CustomerLoyaltyPoint')
        .then(function (registry) {
          var factory = getFactory('org.bloyal',Issuetxn.ltype);
          var CustomerLoyaltyPoint = factory.newResource()

          CustomerLoyaltyPoint.Quantity= Issuetxn.quantity;
          CustomerLoyaltyPoint.issuer = Issuetxn.issuer;
          CustomerLoyaltyPoint.DateTime = Issuetxn.timestamp;
          CustomerLoyaltyPoint.customer = Issuetxn.customer;
          CustomerLoyaltyPoint.lpoint = Issuetxn.ltype;
          //Create the Customer Loyalty Points Asset
            //Store the Transaction on the blockchain

            return registry.add(CustomerLoyaltyPoint);
        });

  }
