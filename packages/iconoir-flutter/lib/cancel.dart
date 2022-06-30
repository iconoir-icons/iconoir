import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Cancel extends StatelessWidget {
  const Cancel({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Cancel.svg');
}
