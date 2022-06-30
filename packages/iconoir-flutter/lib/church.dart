import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Church extends StatelessWidget {
  const Church({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Church.svg');
}
