import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Bank extends StatelessWidget {
  const Bank({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Bank.svg');
}
