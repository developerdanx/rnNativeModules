//
//  Counter.swift
//  rnNativeModules
//
//  Created by Dan Petre on 28/3/22.
//

import Foundation

@objc(Counter)
class Counter: NSObject{
  
  private var count = 0
  
  @objc
  func increment(_ callback:RCTResponseSenderBlock){
    count += 1

    callback([count])
  }
  
  @objc
  func decrement(_ resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) {
    if (count == 0) {
      let error = NSError(domain: "", code: 200, userInfo: nil)
      reject("ERROR_COUNT", "count cannot be negative", error)
    } else {
      count -= 1
      
      resolve(count)
    }
  }
  
  @objc
  static func requiresMainQueueSetup() -> Bool{
    return true
  }
  
  @objc
  func constantsToExport() -> [String: Any]! {
    return ["initialCount": 0]
  }
  
}
