import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class CollageFrame extends StatelessWidget {
  const CollageFrame({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/CollageFrame.svg');
}
