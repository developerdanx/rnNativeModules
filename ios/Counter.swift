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
  static func requiresMainQueueSetup() -> Bool{
    return true
  }
  
  @objc
  func constantsToExport() -> [String: Any]! {
    return ["initialCount": 0]
  }
  
}
