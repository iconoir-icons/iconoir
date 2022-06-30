import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Cash extends StatelessWidget {
  const Cash({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Cash.svg');
}
