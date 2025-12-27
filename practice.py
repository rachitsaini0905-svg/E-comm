class Accounts:
    def __init__(self,name, account_number,balance):
        self.name = name
        self.account_number = account_number
        self.__balance = balance
    
    def security(self,entered_password):
        password = 123
        
        if int(entered_password)== password:
            return True
        else:
            return False
    
    def Account_details(self):
        return self.__balance

    def deposit(self,amount):
        self.__balance += amount
        return self.__balance
    
    def withdraw(self,account):
        if account <=self.__balance:
            self.__balance -=account
            return self.__balance
        else:
            return "Insufficient Balance"
        


A = Accounts("abc","123wgs","12345")
print(A.Account_details())
entered_password = int(input())

print(A.security(entered_password))
            
    